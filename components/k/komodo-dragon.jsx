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
		"content": `<style>.be4_ifbiv {
  d: path("M2.5 12c3.5 0 6-3 9.5-3.5l5.5-.5c2-.5 4 .5 4 2c0 1-1.5 1.5-3.5 1.5l-2 .5c-3 1-7.5.75-13.5 0");
}

.fr80kzb_t {
  d: path("M9.5 12.75L8 16H5.75m9.75-3.5L17 16h2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="be4_ifbiv"/><path class="fr80kzb_t"/></g>`,
		"fallback": "uix:komodo-dragon",
	});
}

export default Component;
