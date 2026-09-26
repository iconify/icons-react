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
		"content": `<style>.o2dklhm6z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM18 17L18 7C18 6.4477 17.5523 6 17 6L12 6L12 12L6 12L6 17C6 17.5523 6.4477 18 7 18L17 18C17.5523 18 18 17.5523 18 17Z");
}
</style><path clip-rule="evenodd" class="o2dklhm6z"/>`,
		"fallback": "keyline-icons:square-three-quarter-sharp-fill",
	});
}

export default Component;
