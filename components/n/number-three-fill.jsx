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
		"content": `<style>.ali2-n2vd {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-76 168a43.85 43.85 0 0 1-34.22-16.34a8 8 0 0 1 12.44-10.06A28 28 0 1 0 126 120.07a8 8 0 0 1-5.58-13.1l22.48-27H96a8 8 0 0 1 0-16h64a8 8 0 0 1 6.15 13.12l-25.23 30.27A44 44 0 0 1 124 192");
}
</style><path class="ali2-n2vd"/>`,
		"fallback": "ph:number-three-fill",
	});
}

export default Component;
