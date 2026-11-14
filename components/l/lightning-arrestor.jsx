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
		"content": `<style>.j6f1c3fkv {
  d: path("M13 8.5L11 12h2l-2 3.5");
}

.pnxh9dbvs {
  d: path("M8 6.5h8v11H8Zm4-4v4m0 11v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pnxh9dbvs"/><path class="j6f1c3fkv"/></g>`,
		"fallback": "uix-sharp:lightning-arrestor",
	});
}

export default Component;
