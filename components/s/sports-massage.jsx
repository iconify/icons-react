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
		"content": `<style>.amiq36e_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 4.5H20a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm2.5 6L11 21h4.5l2-10.5m-15-3a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h3");
}
</style><path class="amiq36e_v"/>`,
		"fallback": "uix-sharp:sports-massage",
	});
}

export default Component;
