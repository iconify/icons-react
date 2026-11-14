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
		"content": `<style>.b2w2njbyw {
  d: path("M7 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 8.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M19 19l1.75 1.75");
}

.ggdwykbhe {
  d: path("M9 19S3.5 14 3.5 8.5a5.5 5.5 0 0 1 11 0C14.5 14 9 19 9 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ggdwykbhe"/><path class="b2w2njbyw"/></g>`,
		"fallback": "uix:pin-search",
	});
}

export default Component;
