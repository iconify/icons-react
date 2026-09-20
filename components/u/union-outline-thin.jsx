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

.on4ig8t5d {
  d: path("M5 4v10");
}

.smyhnv9tm {
  d: path("M19 14a7 7 0 0 1 -14 0");
}

.ydl8e0r_x {
  d: path("M19 4v10");
}
</style><g class="hntgybcog"><path class="on4ig8t5d"/><path class="smyhnv9tm"/><path class="ydl8e0r_x"/></g>`,
		"fallback": "iconmind:union-outline-thin",
	});
}

export default Component;
