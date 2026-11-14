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
		"content": `<style>.k_ssstbak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M6 4v3.5M12 4v4.5M18 4v3.5m-15 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 3v7m0-3h2.5m-2.5 3h2.5m6.5-10a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 3v7m0-3h2.5m-2.5 3h2.5");
}
</style><path class="k_ssstbak"/>`,
		"fallback": "uix-sharp:key-hooks",
	});
}

export default Component;
