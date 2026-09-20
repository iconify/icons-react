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
		"content": `<style>.ukf8gbpkc {
  fill: currentColor;
  d: path("M4.95 20L.5 12L5 4h4l-4.5 8l2.6 4.65L14.9 4H19l4.5 8l-4.5 8h-4l4.5-8l-2.6-4.6L9.15 20z");
}
</style><path class="ukf8gbpkc"/>`,
		"fallback": "material-symbols:polymer",
	});
}

export default Component;
