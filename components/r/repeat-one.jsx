import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.abi02fbuk {
  d: path("M15.75 5.505A7.5 7.5 0 0 1 12 19.5");
}

.dkos5s89g {
  d: path("m10 2.5l2 2l-2 2m.75 4l1.5-1v5");
}

.q5xyx5bnm {
  d: path("m14 17.5l-2 2l2 2m-5.75-3.005A7.5 7.5 0 0 1 12 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="abi02fbuk"/><path class="q5xyx5bnm"/><path class="dkos5s89g"/></g>`,
		"fallback": "uix-sharp:repeat-one",
	});
}

export default Component;
