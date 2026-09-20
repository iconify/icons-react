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
		"content": `<style>.b8v5vh-xj {
  fill: currentColor;
  d: path("m228.24 196.24l-32 32a6 6 0 0 1-8.48-8.48L209.51 198H80a6 6 0 0 1-6-6V54.49L52.24 76.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L86 54.49V186h123.51l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48");
}
</style><path class="b8v5vh-xj"/>`,
		"fallback": "ph:vector-two-light",
	});
}

export default Component;
