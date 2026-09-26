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
		"content": `<style>.imtohwlhd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM7 9L17 9L17 7L7 7L7 9ZM7 13L14.3333 13L14.3333 11L7 11L7 13ZM7 17L11.6667 17L11.6667 15L7 15L7 17Z");
}
</style><path clip-rule="evenodd" class="imtohwlhd"/>`,
		"fallback": "keyline-icons:square-bar-chart-2-horizontal-start-sharp-fill",
	});
}

export default Component;
