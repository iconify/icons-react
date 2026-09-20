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
		"content": `<style>.z74w14bns {
  fill: currentColor;
  d: path("M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-135.82 17a83.47 83.47 0 0 1 46.2-23.52a84.09 84.09 0 0 1-69.72 69.72a83.47 83.47 0 0 1 23.52-46.22Zm-23.84 70.47a107.27 107.27 0 0 0 63.45-30.88a107.27 107.27 0 0 0 30.88-63.45a83.84 83.84 0 0 1 72.19 72.19a108.11 108.11 0 0 0-94.33 94.32a83.82 83.82 0 0 1-72.19-72.18m142.68 48.35a83.53 83.53 0 0 1-46.2 23.52a84.09 84.09 0 0 1 69.72-69.72a83.47 83.47 0 0 1-23.52 46.2");
}
</style><path class="z74w14bns"/>`,
		"fallback": "ph:tennis-ball-bold",
	});
}

export default Component;
