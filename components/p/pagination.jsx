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
		"content": `<style>.dvr-mgrti {
  d: path("M15 12h.01M20 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rwca_dbke {
  fill: currentColor;
  d: path("M5 10h4a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="rwca_dbke"/><path class="dvr-mgrti"/></g>`,
		"fallback": "uix:pagination",
	});
}

export default Component;
