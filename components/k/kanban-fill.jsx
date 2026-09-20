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
		"content": `<style>.bzoyyeekt {
  fill: currentColor;
  d: path("M160 56v96a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m64-8h-40a8 8 0 0 0-8 8v52a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V56a8 8 0 0 0-8-8m4 80h-48a4 4 0 0 0-4 4v44a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-44a4 4 0 0 0-4-4M80 48H40a8 8 0 0 0-8 8v52a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V56a8 8 0 0 0-8-8m4 80H36a4 4 0 0 0-4 4v76a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-76a4 4 0 0 0-4-4");
}
</style><path class="bzoyyeekt"/>`,
		"fallback": "ph:kanban-fill",
	});
}

export default Component;
