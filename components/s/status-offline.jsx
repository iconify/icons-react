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
		"content": `<style>.o13v2vhrv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.828 21.464a9.5 9.5 0 1 1 8.636-8.636M15.5 15.5l5 5m0-5l-5 5");
}
</style><path class="o13v2vhrv"/>`,
		"fallback": "uix-sharp:status-offline",
	});
}

export default Component;
