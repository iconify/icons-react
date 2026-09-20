import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yqmwoob_d {
  fill: currentColor;
  d: path("m17 19.4l-1.9 1.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l1.9-1.9l-1.9-1.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l1.9 1.9l1.9-1.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L18.4 18l1.9 1.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275zM4 16q-.425 0-.712-.288T3 15t.288-.712T4 14h5q.425 0 .713.288T10 15t-.288.713T9 16zm0-4q-.425 0-.712-.288T3 11t.288-.712T4 10h9q.425 0 .713.288T14 11t-.288.713T13 12zm0-4q-.425 0-.712-.288T3 7t.288-.712T4 6h9q.425 0 .713.288T14 7t-.288.713T13 8z");
}
</style><path class="yqmwoob_d"/>`,
		"fallback": "material-symbols:playlist-remove-outline-rounded",
	});
}

export default Component;
