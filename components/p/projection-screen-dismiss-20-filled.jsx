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
		"content": `<style>.txs5m4c-p {
  fill: currentColor;
  d: path("M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 4.793l-1.146-1.147a.5.5 0 0 0-.708.708L13.793 5.5l-1.147 1.146a.5.5 0 0 0 .708.708L14.5 6.207l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 5.5zM14.5 11c.9 0 1.75-.216 2.5-.6v.6a3 3 0 0 1-3 3h-3.5v2h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-2H6a3 3 0 0 1-3-3V5a1 1 0 0 1 0-2h6.6a5.5 5.5 0 0 0 4.9 8");
}
</style><path class="txs5m4c-p"/>`,
		"fallback": "fluent:projection-screen-dismiss-20-filled",
	});
}

export default Component;
