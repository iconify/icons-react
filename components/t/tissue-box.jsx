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

.lal2fobhj {
  d: path("M2.75 14.75h18.5m-13-3c-1-2.75.5-5.5 3-6.25c0-1.5 1-2.5 2.75-2.75c-.25 1.5.5 2.75 2 3.5c-1.25 1.25-1.5 3.5-.75 5.5");
}

.urh6sbipl {
  width: 18.5px;
  height: 9.5px;
  x: 2.75px;
  y: 11.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="urh6sbipl"/><path class="lal2fobhj"/></g>`,
		"fallback": "iconoven:tissue-box",
	});
}

export default Component;
