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
		"content": `<style>.mh_9be5hp {
  fill: currentColor;
  d: path("M1 9C1 6.7909 2.7909 5 5 5L19 5C21.2091 5 23 6.7909 23 9L23 15C23 17.2091 21.2091 19 19 19L5 19C2.7909 19 1 17.2091 1 15L1 9Z");
}
</style><path class="mh_9be5hp"/>`,
		"fallback": "keyline-icons:ratio-16-9-fill",
	});
}

export default Component;
