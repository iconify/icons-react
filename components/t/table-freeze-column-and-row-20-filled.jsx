import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u2t7qnbar {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H12v-4H8v3H5.5A1.5 1.5 0 0 1 4 14.5v-9A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V8h-3v4h4V5.5A2.5 2.5 0 0 0 14.5 3zm9 14H13v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5M8 12h4V8H8z");
}
</style><path class="u2t7qnbar"/>`,
		"fallback": "fluent:table-freeze-column-and-row-20-filled",
	});
}

export default Component;
