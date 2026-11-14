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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7qjn6psg {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0");
}

.nz2mvydwe {
  d: path("m12.813 7.843l.385.636a1.5 1.5 0 0 0 1.252.723l.744.016a.95.95 0 0 1 .813 1.407l-.359.652a1.5 1.5 0 0 0 0 1.446l.359.652a.95.95 0 0 1-.813 1.407l-.744.016a1.5 1.5 0 0 0-1.252.723l-.385.636a.95.95 0 0 1-1.625 0l-.386-.636a1.5 1.5 0 0 0-1.252-.723l-.744-.016a.95.95 0 0 1-.813-1.407l.359-.652a1.5 1.5 0 0 0 0-1.446l-.359-.652a.95.95 0 0 1 .813-1.407l.744-.016a1.5 1.5 0 0 0 1.252-.723l.386-.636a.95.95 0 0 1 1.625 0");
}
</style><g class="hntgybcog"><path class="j7qjn6psg"/><path class="nz2mvydwe"/></g>`,
		"fallback": "uix:screw-head-torx",
	});
}

export default Component;
