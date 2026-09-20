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
		"content": `<style>.rrg_n7bgh {
  fill: currentColor;
  d: path("M230.64 25.36a32 32 0 0 0-45.26 0q-.21.21-.42.45l-53.41 62.41L121 77.64a24 24 0 0 0-33.95 0l-76.69 76.7a8 8 0 0 0 0 11.31l80 80a8 8 0 0 0 11.31 0L178.36 169a24 24 0 0 0 0-33.95l-10.58-10.57L230.19 71c.15-.14.31-.28.45-.43a32 32 0 0 0 0-45.21M96 228.69L79.32 212l22.34-22.35a8 8 0 0 0-11.31-11.31L68 200.68L55.32 188l22.34-22.35a8 8 0 0 0-11.31-11.31L44 176.68L27.31 160l50.35-50.34l68.69 68.69Z");
}
</style><path class="rrg_n7bgh"/>`,
		"fallback": "ph:paint-brush-household-fill",
	});
}

export default Component;
