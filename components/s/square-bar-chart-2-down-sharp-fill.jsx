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
		"content": `<style>.as3krsimg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM9 7L9 11.6667L7 11.6667L7 7L9 7ZM13 7L13 14.3333L11 14.3333L11 7L13 7ZM17 7L17 17L15 17L15 7L17 7Z");
}
</style><path clip-rule="evenodd" class="as3krsimg"/>`,
		"fallback": "keyline-icons:square-bar-chart-2-down-sharp-fill",
	});
}

export default Component;
