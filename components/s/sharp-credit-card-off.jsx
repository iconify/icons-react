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
		"content": `<style>.yh6t0sb3u {
  fill: currentColor;
  d: path("M6.83 4H22v15.17L14.83 12H20V8h-9.17zm13.66 19.31L17.17 20H2V4.83L.69 3.51L2.1 2.1l19.8 19.8zM9.17 12l-4-4H4v4z");
}
</style><path class="yh6t0sb3u"/>`,
		"fallback": "ic:sharp-credit-card-off",
	});
}

export default Component;
