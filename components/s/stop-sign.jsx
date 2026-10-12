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

.li8537k_h {
  d: path("M8.75 12.75v-3m2.3 2.25V8.25m2.3 3.75V8.75m2.3 4V10.5m-6.9 2.25v1.5A2.75 2.75 0 0 0 11.5 17H13a2.65 2.65 0 0 0 2.65-2.65v-1.6m-6.9 1.5L7 12.75");
}

.tayqbkbea {
  d: path("m20.25 16.17l-4.08 4.08q-.53.53-1.28.53H9.11q-.75 0-1.28-.53l-4.08-4.08q-.53-.53-.53-1.28V9.11q0-.75.53-1.28l4.08-4.08q.53-.53 1.28-.53h5.78q.75 0 1.28.53l4.08 4.08q.53.53.53 1.28v5.78q0 .75-.53 1.28");
}
</style><g class="hntgybcog"><path class="tayqbkbea"/><path class="li8537k_h"/></g>`,
		"fallback": "iconoven:stop-sign",
	});
}

export default Component;
