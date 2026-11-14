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
		"content": `<style>.n0e37sbga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4v16.5m-4 0h8M6 7h12M6 7l-3 6.5a3 3 0 0 0 6 0zm12 0l-3 6.5a3 3 0 0 0 6 0z");
}
</style><path class="n0e37sbga"/>`,
		"fallback": "uix:lab-balance",
	});
}

export default Component;
