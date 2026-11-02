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
		"content": `<style>.ftgvaiacv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3v2M3 5h8M9 5q0 7.5-6 9m1-5c1 3 3.5 4.5 7 5m2 7l4-10l4 10m-6-5h4");
}
</style><path class="ftgvaiacv"/>`,
		"fallback": "coolicons:translate-round",
	});
}

export default Component;
