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
		"content": `<style>.v9w9srdch {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM9.5 6L9.5 8L14.5 8L14.5 6ZM18 9.5L16 9.5L16 14.5L18 14.5ZM9.5 16L9.5 18L14.5 18L14.5 16ZM8 9.5L6 9.5L6 14.5L8 14.5Z");
}
</style><path clip-rule="evenodd" class="v9w9srdch"/>`,
		"fallback": "keyline-icons:square-padding-sharp-fill",
	});
}

export default Component;
