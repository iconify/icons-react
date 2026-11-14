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

.lz5opjb0p {
  d: path("M18.75 8.25L21.5 11l-2.75 2.75");
}

.uox6z4w9a {
  d: path("M10 20.5V17a6 6 0 0 0 6-6h5.5");
}

.xa8rgebsh {
  d: path("M16 11a6 6 0 1 1-6-6");
}
</style><g class="hntgybcog"><path class="xa8rgebsh"/><path class="uox6z4w9a"/><path class="lz5opjb0p"/></g>`,
		"fallback": "uix:roundabout-leave",
	});
}

export default Component;
