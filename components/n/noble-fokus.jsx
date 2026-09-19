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
		"content": `<style>.huxpqhujo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.25 24L24 8.008L14.75 24");
}

.sfmnlbcdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 40.215V7.785l-16.965 29.74c-.678 1.188-2.392 1.188-3.07 0L5.5 7.785v32.43z");
}
</style><path class="sfmnlbcdj"/><path class="huxpqhujo"/>`,
		"fallback": "arcticons:noble-fokus",
	});
}

export default Component;
