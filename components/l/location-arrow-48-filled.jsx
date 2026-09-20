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
		"content": `<style>.jdj53y8yf {
  fill: currentColor;
  d: path("M40.596 4.173c2.022-.778 4.008 1.209 3.23 3.23L30.369 42.397c-.871 2.264-4.134 2.085-4.751-.262l-3.93-14.932a1.25 1.25 0 0 0-.89-.89l-14.933-3.93c-2.347-.618-2.526-3.88-.261-4.751z");
}
</style><path class="jdj53y8yf"/>`,
		"fallback": "fluent:location-arrow-48-filled",
	});
}

export default Component;
