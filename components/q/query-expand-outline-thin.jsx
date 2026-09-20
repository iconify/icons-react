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
		"content": `<style>.cabegubdh {
  d: path("M14 5h7");
}

.e7pgrp-wx {
  d: path("M2 12h6");
}

.gy18-zqeb {
  d: path("M14 19h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ltxni2ncy {
  d: path("M14 12h7");
}

.y5__l6b-e {
  d: path("m9 10 2.5 2.5L9 15");
}
</style><g class="hntgybcog"><path class="e7pgrp-wx"/><path class="y5__l6b-e"/><path class="cabegubdh"/><path class="ltxni2ncy"/><path class="gy18-zqeb"/></g>`,
		"fallback": "iconmind:query-expand-outline-thin",
	});
}

export default Component;
