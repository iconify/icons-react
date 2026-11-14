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
		"content": `<style>.nfuws4bde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9.5h4l9-5v15l-9-5H4Zm4 5L9.5 20M20 9.5v5");
}
</style><path class="nfuws4bde"/>`,
		"fallback": "uix-sharp:sale-megaphone",
	});
}

export default Component;
