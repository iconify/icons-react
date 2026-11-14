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
		"content": `<style>.ai3ql4b8f {
  d: path("M16.232 18L18 16.232L19.768 18L18 19.768Z");
}

.p6isvgbjk {
  d: path("M10.872 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.478 0 2.835.272 3.976.764M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm7.257 12.414l5.657-5.657l2.829 2.829l-5.657 5.657Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p6isvgbjk"/><path class="ai3ql4b8f"/></g>`,
		"fallback": "uix-sharp:vaccinated",
	});
}

export default Component;
