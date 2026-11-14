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
		"content": `<style>.dyz9cr0ru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6a6 6 0 0 0 0 12Zm6 0a6 6 0 0 1 0 12Zm-3 1h.01M12 10.5v3m0 3.5h.01");
}
</style><path class="dyz9cr0ru"/>`,
		"fallback": "uix:nuclear-fission",
	});
}

export default Component;
