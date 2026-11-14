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
		"content": `<style>.abqzs5pom {
  d: path("M11.5 9.5H19a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-7.5A2.5 2.5 0 0 1 9 12a2.5 2.5 0 0 1 2.5-2.5m-9 2.5H9m-4 0v9.5");
}

.g-nu8y_po {
  d: path("m11.369 8.568l-1.293-3.161A1.214 1.214 0 0 1 11 3.75l.236-.039a1.5 1.5 0 0 1 1.669 1.005l1.16 3.48a.99.99 0 0 1-.94 1.304h-.368a1.5 1.5 0 0 1-1.388-.932");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="abqzs5pom"/><path class="g-nu8y_po"/></g>`,
		"fallback": "uix:scooter-throttle",
	});
}

export default Component;
