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
		"content": `<style>.w1jeki3de {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM9 9.6667L9 17L7 17L7 9.6667L9 9.6667ZM13 7L13 17L11 17L11 7L13 7ZM17 12.3333L17 17L15 17L15 12.3333L17 12.3333Z");
}
</style><path clip-rule="evenodd" class="w1jeki3de"/>`,
		"fallback": "keyline-icons:square-bar-chart-sharp-fill",
	});
}

export default Component;
