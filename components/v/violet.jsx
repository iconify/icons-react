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
		"content": `<style>.rgo_5pusu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.25a3.75 3.75 0 1 1 2.75 2a3.75 3.75 0 1 1-1 3.5a3.75 3.75 0 1 1-3.5 0a3.75 3.75 0 1 1-1-3.5a3.75 3.75 0 1 1 2.75-2Zm0 3h.01");
}
</style><path class="rgo_5pusu"/>`,
		"fallback": "uix-sharp:violet",
	});
}

export default Component;
