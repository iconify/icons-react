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
		"content": `<style>.jg2w9b0uj {
  fill: currentColor;
  d: path("M5 5C5 2.7909 6.7909 1 9 1L15 1C17.2091 1 19 2.7909 19 5L19 19C19 21.2091 17.2091 23 15 23L9 23C6.7909 23 5 21.2091 5 19L5 5Z");
}
</style><path class="jg2w9b0uj"/>`,
		"fallback": "keyline-icons:ratio-9-16-fill",
	});
}

export default Component;
