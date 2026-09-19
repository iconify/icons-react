import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mbge5fbfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.663 7.108l-8.015 3.736v27.36c0 .35-.34.598-.673.49l-6.618-2.155V8.562L17.074 4.5l6.561 2.142a.25.25 0 0 1 .028.466");
}

.mt3ugfl6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.643 11.837v27.886l-8 3.735a.44.44 0 0 1-.626-.398V15.796l-11.195-3.631a.273.273 0 0 1-.031-.507l7.917-3.69l3.31 1.073z");
}

.y4-v73wzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.628 19.873v14.093c0 .318-.31.544-.613.446l-7.836-2.54a.26.26 0 0 1-.176-.242V17.536c0-.318.31-.544.613-.446l7.836 2.54a.26.26 0 0 1 .176.243");
}
</style><path class="mbge5fbfr"/><path class="y4-v73wzl"/><path class="mt3ugfl6p"/>`,
		"fallback": "arcticons:mobvoi",
	});
}

export default Component;
