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
		"content": `<style>.gj3exob1y {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M12 7H8V4H5.5A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8v-3h1.208a5.5 5.5 0 0 0 .394 4H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3H12zm4.354 5.647a.5.5 0 0 0-.707 0L14.5 13.793l-1.146-1.146a.5.5 0 1 0-.707.707l1.146 1.146l-1.146 1.146a.5.5 0 1 0 .707.707l1.146-1.146l1.146 1.146a.5.5 0 1 0 .707-.707L15.208 14.5l1.146-1.146a.5.5 0 0 0 0-.707M12 9.6A5.52 5.52 0 0 0 9.602 12H8V8h4zm5 0a5.5 5.5 0 0 0-4-.393V8h4zM14.5 3A2.5 2.5 0 0 1 17 5.5V7h-4V3z");
}
</style><path class="gj3exob1y"/>`,
		"fallback": "fluent:table-freeze-column-dismiss-20-filled",
	});
}

export default Component;
