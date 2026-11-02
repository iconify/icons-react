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
		"content": `<style>.blz8tvbof {
  fill: currentColor;
  d: path("M11 8H3a5 5 0 0 1 5-5h3Zm2 0V3h3a5 5 0 0 1 5 5ZM3 14v-4h7v4Zm10 1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m-3 1v4a1 1 0 0 1-1 1H8a5 5 0 0 1-5-5Z");
}
</style><path class="blz8tvbof"/>`,
		"fallback": "coolicons:table-minus-corner-fill-round",
	});
}

export default Component;
