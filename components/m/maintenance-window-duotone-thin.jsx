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
		"content": `<style>.e3dlplb2a {
  d: path("M10.5 9H8v6h2.5");
}

.g45hqpb0s {
  d: path("M10.5 12h3");
}

.gyrsppg8d {
  d: path("M13.5 9H16v6h-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.xa771-t-o {
  fill: currentColor;
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xa771-t-o"/><path class="ugdbidcqi"/><path class="e3dlplb2a"/><path class="gyrsppg8d"/><path class="g45hqpb0s"/></g>`,
		"fallback": "iconmind:maintenance-window-duotone-thin",
	});
}

export default Component;
