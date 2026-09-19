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
		"content": `<style>.pqe799quy {
  fill: currentColor;
  d: path("M17 10.5V6H3v12h14v-4.5l4 4v-11zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3z");
}
</style><path class="pqe799quy"/>`,
		"fallback": "ic:sharp-video-call",
	});
}

export default Component;
