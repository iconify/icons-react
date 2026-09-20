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
		"content": `<style>.av4l4eb6b {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m28.91-133.44a6 6 0 0 1 .73 5.49l-32 88A6 6 0 0 1 120 182a6.2 6.2 0 0 1-2-.36a6 6 0 0 1-3.59-7.69L143.43 94H104a6 6 0 0 1 0-12h48a6 6 0 0 1 4.91 2.56");
}
</style><path class="av4l4eb6b"/>`,
		"fallback": "ph:number-circle-seven-light",
	});
}

export default Component;
