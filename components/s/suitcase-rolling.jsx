import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x7ks83bpu {
  fill: currentColor;
  d: path("M104 88v96a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32 0a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m48-16v144a16 16 0 0 1-16 16h-16v16a8 8 0 0 1-16 0v-16H96v16a8 8 0 0 1-16 0v-16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h24V24a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v24h24a16 16 0 0 1 16 16M104 48h48V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8Zm88 160V64H64v144z");
}
</style><path class="x7ks83bpu"/>`,
		"fallback": "ph:suitcase-rolling",
	});
}

export default Component;
