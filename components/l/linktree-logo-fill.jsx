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
		"content": `<style>.erlpf6brc {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-64 176a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0Zm48-80h-36.69l26.35 26.34a8 8 0 0 1-11.32 11.32L128 123.31l-34.34 34.35a8 8 0 0 1-11.32-11.32L108.69 120H72a8 8 0 0 1 0-16h36.69L82.34 77.66a8 8 0 0 1 11.32-11.32L120 92.69V56a8 8 0 0 1 16 0v36.69l26.34-26.35a8 8 0 0 1 11.32 11.32L147.31 104H184a8 8 0 0 1 0 16");
}
</style><path class="erlpf6brc"/>`,
		"fallback": "ph:linktree-logo-fill",
	});
}

export default Component;
