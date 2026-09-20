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
		"content": `<style>.a9nj5hbth {
  d: path("M4 11h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ils7yp4cg {
  d: path("M2 16h20");
}

.mqtixbwqo {
  d: path("M2 8h20");
}
</style><g class="hntgybcog"><path class="mqtixbwqo"/><path class="a9nj5hbth"/><path class="ils7yp4cg"/></g>`,
		"fallback": "iconmind:platform-outline-thin",
	});
}

export default Component;
