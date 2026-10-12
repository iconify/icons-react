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
		"content": `<style>.c_38-1b9y {
  d: path("M6 10h12v8.5a2.75 2.75 0 0 1-2.75 2.75h-6.5A2.75 2.75 0 0 1 6 18.5Z");
}

.hfb8w9b7u {
  width: 13.5px;
  height: 4px;
  x: 5.25px;
  y: 3px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.twev6kbji {
  d: path("M9.5 15.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><rect class="hfb8w9b7u"/><path class="c_38-1b9y"/><path class="twev6kbji"/></g>`,
		"fallback": "iconoven:jam-jar",
	});
}

export default Component;
