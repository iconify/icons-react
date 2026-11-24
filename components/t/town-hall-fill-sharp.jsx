import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iul0pwpmq {
  fill: currentColor;
  d: path("M21 22h-6v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3V8a6 6 0 1 1 12 0v6h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1M13 7V6a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2Zm-2 15v-4h2v4Z");
}
</style><path class="iul0pwpmq"/>`,
		"fallback": "coolicons:town-hall-fill-sharp",
	});
}

export default Component;
