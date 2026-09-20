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
		"content": `<style>.h4ujbxpnf {
  fill: currentColor;
  d: path("M110 48v160a6 6 0 0 1-12 0v-74H38.49l21.75 21.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48L38.49 122H98V48a6 6 0 0 1 12 0m126.24 75.76l-32-32a6 6 0 0 0-8.48 8.48L217.51 122H158V48a6 6 0 0 0-12 0v160a6 6 0 0 0 12 0v-74h59.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48");
}
</style><path class="h4ujbxpnf"/>`,
		"fallback": "ph:split-horizontal-light",
	});
}

export default Component;
