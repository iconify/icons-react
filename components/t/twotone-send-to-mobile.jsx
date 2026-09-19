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
		"content": `<style>.be625c6pp {
  fill: currentColor;
  d: path("M7 3h10v1H7zm0 17h10v1H7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.d7-8-q3yy {
  fill: currentColor;
  d: path("m22 12l-4-4v3h-5v2h5v3zm-5 6H7V6h10v1h2V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zM7 3h10v1H7zm10 18H7v-1h10z");
}
</style><path class="be625c6pp"/><path class="d7-8-q3yy"/>`,
		"fallback": "ic:twotone-send-to-mobile",
	});
}

export default Component;
