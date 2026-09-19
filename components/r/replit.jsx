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
		"content": `<style>.bc_idjjpz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M7.75 15.5v-9a2 2 0 0 1 2-2H22a2 2 0 0 1 2 2v11H9.75a2 2 0 0 1-2-2Zm16.25 2h14.25a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H24zm-16.25 24v-9a2 2 0 0 1 2-2H24v11a2 2 0 0 1-2 2H9.75a2 2 0 0 1-2-2Z");
}
</style><path class="bc_idjjpz"/>`,
		"fallback": "arcticons:replit",
	});
}

export default Component;
