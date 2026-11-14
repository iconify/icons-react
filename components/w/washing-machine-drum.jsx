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

.kwdkd0bpa {
  d: path("M12 7.5A4.5 4.5 0 1 1 7.5 12");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.wj69sdb4p {
  d: path("M10.25 5.75L12 7.5l-1.75 1.75");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="kwdkd0bpa"/><path class="wj69sdb4p"/></g>`,
		"fallback": "uix:washing-machine-drum",
	});
}

export default Component;
