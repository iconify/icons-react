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
		"content": `<style>.aj_tfzgmu {
  d: path("M5.25 11a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m11 1.75h5.25m-5.25 3.5h5.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xljau9b6m {
  d: path("M6 4.5h4A3.5 3.5 0 0 1 13.5 8v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 14V8A3.5 3.5 0 0 1 6 4.5m-1 13v2m6-2v2m7.875-10za2.625 2.625 0 0 1 2.625 2.625v4.75a2.625 2.625 0 0 1-2.625 2.625a2.625 2.625 0 0 1-2.625-2.625v-4.75A2.625 2.625 0 0 1 18.875 9.5");
}
</style><g class="hntgybcog"><path class="xljau9b6m"/><path class="aj_tfzgmu"/></g>`,
		"fallback": "uix:treasury-building",
	});
}

export default Component;
