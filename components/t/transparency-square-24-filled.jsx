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
		"content": `<style>.ga7pjgavt {
  fill: currentColor;
  d: path("M6.25 2.5A3.75 3.75 0 0 0 2.5 6.25v11.5a3.75 3.75 0 0 0 3.75 3.75h11.5a3.75 3.75 0 0 0 3.75-3.75V6.25a3.75 3.75 0 0 0-3.75-3.75zM4.5 6.25c0-.966.784-1.75 1.75-1.75H8V8H4.5zm0 5.75H8V8h4V4.5h4V8h3.5v4H16v4h3.5v1.75a1.75 1.75 0 0 1-1.75 1.75H16V16h-4v3.5H8V16H4.5zm7.5 0v4H8v-4zm0 0h4V8h-4z");
}
</style><path class="ga7pjgavt"/>`,
		"fallback": "fluent:transparency-square-24-filled",
	});
}

export default Component;
