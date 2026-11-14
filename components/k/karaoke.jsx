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
		"content": `<style>.aa_206tct {
  d: path("m11.25 10.25l2.5 2.5l-8 7.5l-2-2Zm0-3.25L17 12.75");
}

.twm_gubfi {
  d: path("M11 8.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="twm_gubfi"/><path class="aa_206tct"/></g>`,
		"fallback": "uix-sharp:karaoke",
	});
}

export default Component;
