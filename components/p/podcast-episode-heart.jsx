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
		"content": `<style>.iayqa-ore {
  d: path("M14.743 21.5H3.5v-19h10l3 3v7.257");
}

.oslqirbld {
  d: path("M13.5 2.5v3h3M9 13a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.s3bnxcb1f {
  d: path("M7.348 15.652a3.75 3.75 0 1 1 5.304 0M10 14v4.75m8.25 2.5l-2.75-3a2 2 0 0 1 2.75-2.5a2 2 0 0 1 2.75 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iayqa-ore"/><path class="oslqirbld"/><path class="s3bnxcb1f"/></g>`,
		"fallback": "uix-sharp:podcast-episode-heart",
	});
}

export default Component;
