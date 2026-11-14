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
		"content": `<style>.jwn_tps0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14V5a2.5 2.5 0 0 1 5 0v9a4 4 0 1 1-5 0Zm8-8h3m-3 4h3");
}
</style><path class="jwn_tps0h"/>`,
		"fallback": "uix-sharp:temperature-adjust",
	});
}

export default Component;
