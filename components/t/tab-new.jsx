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
		"content": `<style>.g05ibg-na {
  d: path("M10.5 4v3.5A1.5 1.5 0 0 0 12 9h9.5M12 11.75v5.5M9.25 14.5h5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zuy18rxxe {
  d: path("M7.75 4h8.5a5.25 5.25 0 0 1 5.25 5.25v5.5A5.25 5.25 0 0 1 16.25 20h-8.5a5.25 5.25 0 0 1-5.25-5.25v-5.5A5.25 5.25 0 0 1 7.75 4");
}
</style><g class="hntgybcog"><path class="zuy18rxxe"/><path class="g05ibg-na"/></g>`,
		"fallback": "uix:tab-new",
	});
}

export default Component;
