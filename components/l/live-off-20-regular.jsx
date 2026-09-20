import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sksjqjb8v {
  fill: currentColor;
  d: path("M2.146 2.27a.5.5 0 0 1 .708 0l15 15a.5.5 0 0 1-.707.707l-6.784-6.784a1.251 1.251 0 0 1-1.56-1.56L6.607 7.438a4.25 4.25 0 0 0 .385 5.567a.5.5 0 0 1-.707.707a5.25 5.25 0 0 1-.39-6.987L4.653 5.483a7 7 0 0 0 .397 9.466a.5.5 0 0 1-.707.707a8 8 0 0 1-.399-10.882L2.146 2.977a.5.5 0 0 1 0-.707M14.95 4.343a.5.5 0 0 1 .707 0a8 8 0 0 1 .91 10.224l-.72-.718a7 7 0 0 0-.897-8.8a.5.5 0 0 1 0-.706m-1.947 1.944a.5.5 0 0 1 .708 0a5.25 5.25 0 0 1 .862 6.287l-.742-.742a4.25 4.25 0 0 0-.828-4.838a.5.5 0 0 1 0-.707");
}
</style><path class="sksjqjb8v"/>`,
		"fallback": "fluent:live-off-20-regular",
	});
}

export default Component;
