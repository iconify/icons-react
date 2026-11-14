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

.rnlrbdrmp {
  d: path("M8.5 9c0-1 1-1.5 3.5-1.5s3.5.5 3.5 1.5c0 3.5-1.5 6-2.25 7.5v4h-2.5v-4C10 15 8.5 12.5 8.5 9m0-.25C7.5 7.5 6 7 4.5 7.5m11 1.25c1-1.25 2.5-1.75 4-1.25");
}

.v2zk1ia5c {
  d: path("M10.5 9.5h3l-1.5 3Z");
}
</style><g class="hntgybcog"><path class="rnlrbdrmp"/><path class="v2zk1ia5c"/></g>`,
		"fallback": "uix:uterus",
	});
}

export default Component;
