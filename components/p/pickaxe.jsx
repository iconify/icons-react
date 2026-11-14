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
		"content": `<style>.a6ofj8tlq {
  d: path("M12 6za1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V7.5A1.5 1.5 0 0 1 12 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ucfwazwsw {
  d: path("M3 8c4-4 14-4 18 0C17 6.5 7 6.5 3 8");
}
</style><g class="hntgybcog"><path class="ucfwazwsw"/><path class="a6ofj8tlq"/></g>`,
		"fallback": "uix:pickaxe",
	});
}

export default Component;
