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

.ida6bn1tj {
  d: path("M15.5 6.5V9H13");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.uc2om8aui {
  d: path("M13.539 7.771A4.5 4.5 0 1 1 8.103 9.75");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="uc2om8aui"/><path class="ida6bn1tj"/></g>`,
		"fallback": "uix:system-boot-loop",
	});
}

export default Component;
