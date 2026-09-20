import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.flcz6qbxz {
  fill: currentColor;
  d: path("M5.75 2a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5H5V2.75A.75.75 0 0 1 5.75 2m16.5 0a.75.75 0 0 1 .75.75V5h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75M5.75 26a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5H5v2.25c0 .414.336.75.75.75m16.5 0a.75.75 0 0 0 .75-.75V23h2.25a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75M9.5 6.5A1.5 1.5 0 0 0 8 8v12a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 20 20V8a1.5 1.5 0 0 0-1.5-1.5zm1.5 5.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75");
}
</style><path class="flcz6qbxz"/>`,
		"fallback": "fluent:mobile-optimized-28-filled",
	});
}

export default Component;
