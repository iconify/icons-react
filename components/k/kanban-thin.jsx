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
		"content": `<style>.gvtjzjrzb {
  fill: currentColor;
  d: path("M216 52H40a4 4 0 0 0-4 4v152a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-52h56v20a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4M92 208a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-84h48Zm0-92H44V60h48Zm64 32h-56V60h56Zm56 28a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4v-52h48Zm0-60h-48V60h48Z");
}
</style><path class="gvtjzjrzb"/>`,
		"fallback": "ph:kanban-thin",
	});
}

export default Component;
