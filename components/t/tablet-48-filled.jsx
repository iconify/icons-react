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
		"content": `<style>.gr0x0iuof {
  fill: currentColor;
  d: path("M4 12.25A4.25 4.25 0 0 1 8.25 8h31.5A4.25 4.25 0 0 1 44 12.25v23.5A4.25 4.25 0 0 1 39.75 40H8.25A4.25 4.25 0 0 1 4 35.75zM20 31a1.25 1.25 0 1 0 0 2.5h8a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="gr0x0iuof"/>`,
		"fallback": "fluent:tablet-48-filled",
	});
}

export default Component;
