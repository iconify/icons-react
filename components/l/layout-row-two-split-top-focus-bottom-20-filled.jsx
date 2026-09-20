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
		"content": `<style>.l2081-bpg {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v4h5.5V4zm4.5 0v6H16V6a2 2 0 0 0-2-2z");
}
</style><path class="l2081-bpg"/>`,
		"fallback": "fluent:layout-row-two-split-top-focus-bottom-20-filled",
	});
}

export default Component;
