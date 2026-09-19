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
		"content": `<style>.abbsc_-2x {
  fill: currentColor;
  d: path("M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm0 10h2v2h-2zm-6-6h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm0-4h2v2h-2zm2 2h2v2h-2z");
}

.gvpzxdbes {
  fill: currentColor;
  d: path("M5 15h4v4H5zM5 5h4v4H5zm10 0h4v4h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="gvpzxdbes"/><path class="abbsc_-2x"/>`,
		"fallback": "ic:twotone-qr-code",
	});
}

export default Component;
