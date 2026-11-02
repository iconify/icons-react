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
		"content": `<style>.f2vum83vf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 7h3a2 2 0 0 1 2 2v3a2.236 2.236 0 1 0 0 4v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3a2.236 2.236 0 1 1 0-4V9a2 2 0 0 1 2-2h3a2.236 2.236 0 1 1 4 0");
}
</style><path class="f2vum83vf"/>`,
		"fallback": "coolicons:puzzle",
	});
}

export default Component;
