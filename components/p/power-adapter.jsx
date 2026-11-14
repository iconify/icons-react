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
		"content": `<style>.gz14gia_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6.5h6a3.5 3.5 0 0 1 3.5 3.5v2.5A3.5 3.5 0 0 1 15 16H9a3.5 3.5 0 0 1-3.5-3.5V10A3.5 3.5 0 0 1 9 6.5m.5-4v4m5-4v4M12 16v2.5a2.5 2.5 0 0 0 2.5 2.5h7M15 11.25h.01");
}
</style><path class="gz14gia_w"/>`,
		"fallback": "uix:power-adapter",
	});
}

export default Component;
