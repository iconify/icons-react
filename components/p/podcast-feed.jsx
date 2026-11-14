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
		"content": `<style>.fr82svbdj {
  d: path("M4.5 19.5h.01m-.01-6a6 6 0 0 1 6 6m-6-11a11 11 0 0 1 11 11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x3n083g2c {
  d: path("M4.5 3.5a16 16 0 0 1 16 16");
}
</style><g class="hntgybcog"><path class="fr82svbdj"/><path class="x3n083g2c"/></g>`,
		"fallback": "uix:podcast-feed",
	});
}

export default Component;
