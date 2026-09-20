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
		"content": `<style>.p328yvjub {
  fill: currentColor;
  d: path("M10.25 9A6.25 6.25 0 0 0 4 15.25v3.25h40v-3.25A6.25 6.25 0 0 0 37.75 9zM4 32.75V21h40v11.75A6.25 6.25 0 0 1 37.75 39h-27.5A6.25 6.25 0 0 1 4 32.75m27.25-3.25a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="p328yvjub"/>`,
		"fallback": "fluent:payment-48-filled",
	});
}

export default Component;
