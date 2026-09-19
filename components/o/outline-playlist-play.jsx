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
		"content": `<style>.obf8cbbsy {
  fill: currentColor;
  d: path("M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z");
}
</style><path class="obf8cbbsy"/>`,
		"fallback": "ic:outline-playlist-play",
	});
}

export default Component;
