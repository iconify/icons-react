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
		"content": `<style>.e41ip5b0d {
  fill: currentColor;
  d: path("M11 15h2v2h-2zm0-8h2v6h-2z");
}

.w89-xcbdt {
  fill: currentColor;
  d: path("M5.01 1v22H19V1zM17 18H7V6h10z");
}
</style><path class="e41ip5b0d"/><path class="w89-xcbdt"/>`,
		"fallback": "ic:sharp-security-update-warning",
	});
}

export default Component;
