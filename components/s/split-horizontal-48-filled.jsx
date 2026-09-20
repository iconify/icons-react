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
		"content": `<style>.ru-jo4b2p {
  fill: currentColor;
  d: path("M42.75 25.5a1.25 1.25 0 1 0 0-2.5H5.25a1.25 1.25 0 1 0 0 2.5zM8 39.75V27.5h32v12.25A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75M40 21V8.25A4.25 4.25 0 0 0 35.75 4h-23.5A4.25 4.25 0 0 0 8 8.25V21z");
}
</style><path class="ru-jo4b2p"/>`,
		"fallback": "fluent:split-horizontal-48-filled",
	});
}

export default Component;
