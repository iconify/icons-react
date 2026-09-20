import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ygpdaqb0d {
  fill: currentColor;
  d: path("M204 56v144a4 4 0 0 1-8 0v-68H60v68a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v68h136V56a4 4 0 0 1 8 0");
}
</style><path class="ygpdaqb0d"/>`,
		"fallback": "ph:text-h-thin",
	});
}

export default Component;
