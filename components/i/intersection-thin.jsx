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
		"content": `<style>.rqm-cqnkt {
  fill: currentColor;
  d: path("M204 120v80a4 4 0 0 1-8 0v-80a68 68 0 0 0-136 0v80a4 4 0 0 1-8 0v-80a76 76 0 0 1 152 0");
}
</style><path class="rqm-cqnkt"/>`,
		"fallback": "ph:intersection-thin",
	});
}

export default Component;
