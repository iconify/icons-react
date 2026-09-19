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
		"content": `<style>.ahbhjaczq {
  fill: currentColor;
  d: path("M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6zm-6-2h4v2h-4zm10 15H4V8h16zM9 9v9l7.5-5z");
}

.o7lfckbvq {
  fill: currentColor;
  d: path("M4 19h16V8H4zM9 9l7.5 4L9 18z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="o7lfckbvq"/><path class="ahbhjaczq"/>`,
		"fallback": "ic:twotone-shop",
	});
}

export default Component;
