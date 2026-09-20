import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jejjyjb2z {
  fill: currentColor;
  d: path("M2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5zM25.5 6H13v20h12.5a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 25.5 6m-19 3a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm-1 7a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1m0 6a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1");
}
</style><path class="jejjyjb2z"/>`,
		"fallback": "fluent:panel-left-text-32-filled",
	});
}

export default Component;
