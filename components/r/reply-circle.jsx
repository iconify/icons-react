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
		"content": `<style>.cb1279bma {
  d: path("M16.5 16v-1.5a3 3 0 0 0-3-3H7.75");
}

.mnrmdrb0a {
  d: path("M10.5 8.75L7.75 11.5l2.75 2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="cb1279bma"/><path class="mnrmdrb0a"/></g>`,
		"fallback": "uix-sharp:reply-circle",
	});
}

export default Component;
