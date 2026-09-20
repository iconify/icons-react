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
		"content": `<style>.klh3bltfq {
  fill: currentColor;
  d: path("M10.25 7A3.25 3.25 0 0 0 7 10.25v5.25a1.5 1.5 0 0 1-3 0v-5.25A6.25 6.25 0 0 1 10.25 4h5.25a1.5 1.5 0 0 1 0 3zm0 34A3.25 3.25 0 0 1 7 37.75V32.5a1.5 1.5 0 0 0-3 0v5.25A6.25 6.25 0 0 0 10.25 44h5.25a1.5 1.5 0 0 0 0-3zM41 10.25A3.25 3.25 0 0 0 37.75 7H32.5a1.5 1.5 0 0 1 0-3h5.25A6.25 6.25 0 0 1 44 10.25v5.25a1.5 1.5 0 0 1-3 0zM37.75 41A3.25 3.25 0 0 0 41 37.75V32.5a1.5 1.5 0 0 1 3 0v5.25A6.25 6.25 0 0 1 37.75 44H32.5a1.5 1.5 0 0 1 0-3zM13 24a1.5 1.5 0 0 1 1.5-1.5h19a1.5 1.5 0 0 1 0 3h-19A1.5 1.5 0 0 1 13 24");
}
</style><path class="klh3bltfq"/>`,
		"fallback": "fluent:scan-dash-48-filled",
	});
}

export default Component;
