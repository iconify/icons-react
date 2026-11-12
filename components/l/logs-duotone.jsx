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
		"content": `<style>.njgkc8btq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18M3 9h18M3 14h5m-5 5h5m4-2a5 5 0 1 0 10 0a5 5 0 0 0-10 0m5-2v2h2");
}
</style><path class="njgkc8btq"/>`,
		"fallback": "coolicons:logs-duotone",
	});
}

export default Component;
