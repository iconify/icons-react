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
		"content": `<style>.z0a5-zyhs {
  fill: currentColor;
  d: path("M183.05 56H72A72 72 0 0 0 .08 131.4c1.69 36.69 31.76 66.79 68.45 68.52c15.84.72 32-5.9 49.38-20.3a15.87 15.87 0 0 1 20.24 0C148.72 188.39 165 200 184 200a72 72 0 0 0 72-72.95C255.49 87.87 222.76 56 183.05 56M176 104H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16");
}
</style><path class="z0a5-zyhs"/>`,
		"fallback": "ph:visor-fill",
	});
}

export default Component;
