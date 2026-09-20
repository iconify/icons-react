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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.nh3g8x-2b {
  d: path("M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h7.826a2.5 2.5 0 0 1 .17-3.348l4.917-4.917a2.5 2.5 0 0 1 3.536 0l.801.8V6.75A2.75 2.75 0 0 0 19.25 4z");
}

.o0-d44b5a {
  d: path("M20.492 12.442a1.5 1.5 0 0 0-2.121 0l-3.111 3.11l4.207 4.208l3.11-3.111a1.5 1.5 0 0 0 0-2.122zm-7.039 4.918l1.1-1.1l4.207 4.207l-1.1 1.1a1.5 1.5 0 0 1-2.121 0l-2.086-2.086a1.5 1.5 0 0 1 0-2.122");
}
</style><g class="cuyn6tgcc"><path class="nh3g8x-2b"/><path class="o0-d44b5a"/></g>`,
		"fallback": "fluent:slide-eraser-24-filled",
	});
}

export default Component;
