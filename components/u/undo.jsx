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
		"content": `<style>.bfwiu2w4e {
  d: path("m8.5 5.5l-4 4l4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzmnvky3g {
  d: path("M4.5 9.5h10a5 5 0 0 1 0 10H9");
}
</style><g class="hntgybcog"><path class="vzmnvky3g"/><path class="bfwiu2w4e"/></g>`,
		"fallback": "uix:undo",
	});
}

export default Component;
