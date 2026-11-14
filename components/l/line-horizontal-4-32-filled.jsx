import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rpifrsbag {
  fill: currentColor;
  d: path("M28.75 25a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 1 1 0-2.5zm0-7a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 1 1 0-2.5zm0-7a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 1 1 0-2.5zm0-7a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 1 1 0-2.5z");
}
</style><path class="rpifrsbag"/>`,
		"fallback": "fluent:line-horizontal-4-32-filled",
	});
}

export default Component;
