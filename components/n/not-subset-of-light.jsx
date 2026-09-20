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
		"content": `<style>.xb5rrwbje {
  fill: currentColor;
  d: path("M212 35.56a6 6 0 0 0-8.48.4l-5.49 6H128A85.93 85.93 0 0 0 65.9 187.4L43.56 212a6 6 0 0 0 8.88 8l22.33-24.57A85.52 85.52 0 0 0 128 214h72a6 6 0 0 0 0-12h-72a73.65 73.65 0 0 1-45.14-15.42L212.44 44a6 6 0 0 0-.44-8.44M54 128a74.09 74.09 0 0 1 74-74h59.16L74 178.5A73.7 73.7 0 0 1 54 128");
}
</style><path class="xb5rrwbje"/>`,
		"fallback": "ph:not-subset-of-light",
	});
}

export default Component;
