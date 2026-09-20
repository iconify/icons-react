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
		"content": `<style>.ri2b2ebua {
  fill: currentColor;
  d: path("m225.9 74.78l-44.69-44.69a14 14 0 0 0-19.8 0L38.1 153.41a13.94 13.94 0 0 0-4.1 9.9V208a14 14 0 0 0 14 14h44.69a13.94 13.94 0 0 0 9.9-4.1L225.9 94.58a14 14 0 0 0 0-19.8M48.49 160L136 72.48L155.51 92L68 179.51ZM46 208v-33.52L81.51 210H48a2 2 0 0 1-2-2m50-.49L76.49 188L164 100.48L183.51 120ZM217.41 86.1L192 111.51L144.49 64l25.41-25.42a2 2 0 0 1 2.83 0l44.68 44.69a2 2 0 0 1 0 2.83");
}
</style><path class="ri2b2ebua"/>`,
		"fallback": "ph:pencil-light",
	});
}

export default Component;
