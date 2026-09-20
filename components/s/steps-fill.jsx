import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xb_s_dbjr {
  fill: currentColor;
  d: path("M240 56v144a8 8 0 0 1-8 8H8a8 8 0 0 1 0-16h48v-40a8 8 0 0 1 8-8h48v-40a8 8 0 0 1 8-8h48V56a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8");
}
</style><path class="xb_s_dbjr"/>`,
		"fallback": "ph:steps-fill",
	});
}

export default Component;
