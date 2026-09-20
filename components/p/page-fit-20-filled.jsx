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
		"content": `<style>.wokog8vdr {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm1.5 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1A1.5 1.5 0 0 1 5.5 6m8 0h1A1.5 1.5 0 0 1 16 7.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1 0-1M5 11.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 1 4 12.5v-1a.5.5 0 0 1 1 0m11 0v1a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0");
}
</style><path class="wokog8vdr"/>`,
		"fallback": "fluent:page-fit-20-filled",
	});
}

export default Component;
