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
		"content": `<style>.oslqirbld {
  d: path("M13.5 2.5v3h3M9 13a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.pcyew975a {
  d: path("M7.348 15.652a3.75 3.75 0 1 1 5.304 0M10 14v4.75m4.75-.75l2 2L21 15.75");
}

.rdjbrvbvd {
  d: path("M14.343 21.5H3.5v-19h10l3 3v10.357");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rdjbrvbvd"/><path class="oslqirbld"/><path class="pcyew975a"/></g>`,
		"fallback": "uix-sharp:podcast-episode-check",
	});
}

export default Component;
