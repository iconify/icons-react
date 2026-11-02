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
		"content": `<style>.i1q_jvb4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 17c7 4 13-1 12-12C8 4 3 10 7 17m-1 3c.1-.7.4-1.8 1-3m0 0c1.6-2.4 3.4-4.4 6-6");
}
</style><path class="i1q_jvb4a"/>`,
		"fallback": "coolicons:leaf-round",
	});
}

export default Component;
