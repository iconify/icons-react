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
		"content": `<style>.dcdvak9ui {
  fill: currentColor;
  d: path("M1 7C1 4.7909 2.7909 3 5 3L19 3C21.2091 3 23 4.7909 23 7L23 17C23 19.2091 21.2091 21 19 21L5 21C2.7909 21 1 19.2091 1 17L1 7Z");
}
</style><path class="dcdvak9ui"/>`,
		"fallback": "keyline-icons:ratio-4-3-fill",
	});
}

export default Component;
