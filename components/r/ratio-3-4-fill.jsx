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
		"content": `<style>.m0159abrc {
  fill: currentColor;
  d: path("M3 5C3 2.7909 4.7909 1 7 1L17 1C19.2091 1 21 2.7909 21 5L21 19C21 21.2091 19.2091 23 17 23L7 23C4.7909 23 3 21.2091 3 19L3 5Z");
}
</style><path class="m0159abrc"/>`,
		"fallback": "keyline-icons:ratio-3-4-fill",
	});
}

export default Component;
