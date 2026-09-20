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
		"content": `<style>.k4bsdlbnl {
  fill: currentColor;
  d: path("M220.06 84a102.06 102.06 0 1 1-24.31-32.27l24-24a6 6 0 0 1 8.48 8.49l-96 96a6 6 0 1 1-8.48-8.49l29.39-29.4a42 42 0 1 0 16.78 31.24a6 6 0 1 1 12-.68a54 54 0 1 1-20.22-39.06l25.54-25.55a89.91 89.91 0 1 0 22 28.93A6 6 0 1 1 220.06 84");
}
</style><path class="k4bsdlbnl"/>`,
		"fallback": "ph:target-light",
	});
}

export default Component;
