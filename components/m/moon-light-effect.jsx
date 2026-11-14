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
		"content": `<style>.ir_zkobdo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 4.5a6 6 0 0 0 8 8a8 8 0 1 1-8-8m7.75-1.125l.297.52a1.5 1.5 0 0 0 .558.558l.52.297a.576.576 0 0 1 0 1l-.52.297a1.5 1.5 0 0 0-.558.558l-.297.52a.576.576 0 0 1-1 0l-.297-.52a1.5 1.5 0 0 0-.558-.558l-.52-.297a.576.576 0 0 1 0-1l.52-.297a1.5 1.5 0 0 0 .558-.558l.297-.52a.576.576 0 0 1 1 0");
}
</style><path class="ir_zkobdo"/>`,
		"fallback": "uix:moon-light-effect",
	});
}

export default Component;
