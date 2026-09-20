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
		"content": `<style>.h8cu4kj3h {
  fill: var(--svg-color--fff, #fff);
  d: path("M121.04 134.96v93.312c-49.663-2.837-89.64-42.345-93.215-91.81l-.097-1.502zm90.962 0c-2.6 49.664-38.816 89.64-84.159 93.215l-1.377.097V134.96zm.112-91.074v85.648h-85.648V43.886z");
}

.njt8q8xkg {
  fill: var(--svg-color--f0047f, #f0047f);
  d: path("M128 0C57.221 0 0 57.221 0 128s57.221 128 128 128s128-57.222 128-128V0z");
}
</style><path class="njt8q8xkg"/><path class="h8cu4kj3h"/>`,
		"fallback": "logos:jamstack-icon",
	});
}

export default Component;
