import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a41mz9brd {
  fill: currentColor;
  d: path("M16 6a2 2 0 0 1 2-2h8v10H16zM6 16a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8V16zm20 0H16v10h8a2 2 0 0 0 2-2zM36 4h-8v10h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M10 35a2 2 0 0 1 2-2h8v10h-8a2 2 0 0 1-2-2zm22-2H22v10h10zm2 0h10v8a2 2 0 0 1-2 2h-8zm2-12a2 2 0 0 0-2 2v8h10v-8a2 2 0 0 0-2-2z");
}
</style><path class="a41mz9brd"/>`,
		"fallback": "fluent:tetris-app-48-filled",
	});
}

export default Component;
