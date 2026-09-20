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
		"content": `<style>.eg5bd0bty {
  fill: currentColor;
  d: path("M1 20V4h22v16zm5-2h12V6H6zm7-1h4v-4h-1.5v2.5H13zm-6-6h1.5V8.5H11V7H7z");
}
</style><path class="eg5bd0bty"/>`,
		"fallback": "material-symbols:screenshot-tablet-sharp",
	});
}

export default Component;
