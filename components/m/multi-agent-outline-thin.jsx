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
		"content": `<style>.arm3v4biy {
  d: path("M9.9 3.92a4.5 4.5 0 1 1 -3.8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxv870p2c {
  d: path("M17.9 11.92a4.5 4.5 0 1 1 -3.8 0");
}
</style><g class="hntgybcog"><path class="arm3v4biy"/><path class="wxv870p2c"/></g>`,
		"fallback": "iconmind:multi-agent-outline-thin",
	});
}

export default Component;
