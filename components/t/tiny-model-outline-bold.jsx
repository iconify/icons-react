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
		"content": `<style>.pflcjg8ti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
  d: path("M13.5 5H16a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3V8l3 -3h2.5");
}
</style><path class="pflcjg8ti"/>`,
		"fallback": "iconmind:tiny-model-outline-bold",
	});
}

export default Component;
