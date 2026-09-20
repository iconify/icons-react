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
		"content": `<style>.dvsx2kb7s {
  fill: currentColor;
  d: path("M207.23 203.42a8 8 0 0 1-10.66 3.81l-152-72a8 8 0 0 1 0-14.46l152-72a8 8 0 1 1 6.85 14.46L66.69 128l136.73 64.77a8 8 0 0 1 3.81 10.65");
}
</style><path class="dvsx2kb7s"/>`,
		"fallback": "ph:less-than",
	});
}

export default Component;
