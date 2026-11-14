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
		"content": `<style>.a5mher4uw {
  d: path("M3.5 21.5V11a8.5 8.5 0 0 1 17 0v10.5");
}

.gyqlmg7ct {
  d: path("M7.5 21.5V13h9v8.5M12 13v8.5m-1.75-4h.01m3.49 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a5mher4uw"/><path class="gyqlmg7ct"/></g>`,
		"fallback": "uix:mall-entrance",
	});
}

export default Component;
