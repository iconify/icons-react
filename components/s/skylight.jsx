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
		"content": `<style>.o1-ve0btl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.625 8h10.75A2.625 2.625 0 0 1 20 10.625v6.75A2.625 2.625 0 0 1 17.375 20H6.625A2.625 2.625 0 0 1 4 17.375v-6.75A2.625 2.625 0 0 1 6.625 8M12 8v12m-8-6h16M7.5 3L6 5m6-2.5V5m4.5-2L18 5");
}
</style><path class="o1-ve0btl"/>`,
		"fallback": "uix:skylight",
	});
}

export default Component;
