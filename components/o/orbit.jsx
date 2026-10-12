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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m10ymsugb {
  cx: 12px;
  cy: 12px;
  r: 3.5px;
}

.mc92kqbrb {
  cx: 17.83px;
  cy: 6.17px;
  r: 2px;
}

.s_yqvibim {
  d: path("M19.07 7.74a8.25 8.25 0 1 1-2.81-2.81");
}
</style><g class="hntgybcog"><circle class="m10ymsugb"/><path class="s_yqvibim"/><circle class="mc92kqbrb"/></g>`,
		"fallback": "iconoven:orbit",
	});
}

export default Component;
