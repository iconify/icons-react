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
		"content": `<style>.mfgrclbku {
  fill: currentColor;
  d: path("M4 20.25A6.25 6.25 0 0 1 10.25 14h27.5A6.25 6.25 0 0 1 44 20.25v7.5A6.25 6.25 0 0 1 37.75 34h-27.5A6.25 6.25 0 0 1 4 27.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v7.5a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75v-7.5a3.75 3.75 0 0 0-3.75-3.75zM32 21a2 2 0 1 1-4 0a2 2 0 0 1 4 0m5 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="mfgrclbku"/>`,
		"fallback": "fluent:storage-48-regular",
	});
}

export default Component;
