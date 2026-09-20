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
		"content": `<style>.r46raqjju {
  fill: currentColor;
  d: path("M206 56v144a6 6 0 0 1-12 0v-66H62v66a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v66h132V56a6 6 0 0 1 12 0");
}
</style><path class="r46raqjju"/>`,
		"fallback": "ph:text-h-light",
	});
}

export default Component;
