import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nywmvgvgp {
  fill: currentColor;
  d: path("m9 19.118l-3.553 1.776c-.356.181-.75.274-1.149.273C3.076 21.164 2 20.265 2 19V7c.001-1.348 1.478-2.357 2.553-2.894l3.999-2h.001a1 1 0 0 1 .894 0L15 4.882l3.553-1.776c.356-.181.75-.274 1.149-.273C20.924 2.836 22 3.735 22 5v12c-.001 1.348-1.478 2.357-2.553 2.894l-3.998 1.999l-.002.001a1 1 0 0 1-.894 0Zm1-1.736l4 2V6.618l-4-2Z");
}
</style><path class="nywmvgvgp"/>`,
		"fallback": "coolicons:map-fill",
	});
}

export default Component;
