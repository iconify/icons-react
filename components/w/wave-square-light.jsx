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
		"content": `<style>.piayby0yj {
  fill: currentColor;
  d: path("M238 128v56a6 6 0 0 1-6 6H128a6 6 0 0 1-6-6V78H30v50a6 6 0 0 1-12 0V72a6 6 0 0 1 6-6h104a6 6 0 0 1 6 6v106h92v-50a6 6 0 0 1 12 0");
}
</style><path class="piayby0yj"/>`,
		"fallback": "ph:wave-square-light",
	});
}

export default Component;
