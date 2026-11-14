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
		"content": `<style>.bmjkoed4r {
  d: path("m8.5 19.5l-2 .25l.5 2m.25-18a9.5 9.5 0 0 1 10.25.5");
}

.nlqchlbqk {
  d: path("m15.5 4.5l2-.25l-.5-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vul1d088y {
  d: path("M8 6.5h8v11H8Zm8.75 13.75a9.5 9.5 0 0 1-10.25-.5");
}
</style><g class="ulnmmdpxh"><path class="vul1d088y"/><path class="bmjkoed4r"/><path class="nlqchlbqk"/></g>`,
		"fallback": "uix-sharp:smartphone-rotate",
	});
}

export default Component;
