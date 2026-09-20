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
		"content": `<style>.n0fi7b2yc {
  fill: currentColor;
  d: path("M4.598 21q-.315 0-.488-.204q-.172-.204-.172-.469q0-.143.037-.24t.148-.21L19.877 4.123q.112-.111.21-.148t.24-.036q.265 0 .47.172q.203.172.203.487v15.479q0 .394-.265.659q-.264.264-.658.264zm4.69-1H20V5.427L9.289 16.139z");
}
</style><path class="n0fi7b2yc"/>`,
		"fallback": "material-symbols-light:signal-cellular-1-bar-outline-rounded",
	});
}

export default Component;
