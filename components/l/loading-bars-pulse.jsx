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
		"content": `<style>.qsjdrw7eu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4v16m-8-9.5v3m4-6v9m8-9v9m4-6v3");
}
</style><path class="qsjdrw7eu"/>`,
		"fallback": "uix-sharp:loading-bars-pulse",
	});
}

export default Component;
