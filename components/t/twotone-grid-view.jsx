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
		"content": `<style>.fmobaibnq {
  fill: currentColor;
  d: path("M3 21h8v-8H3zm2-6h4v4H5zm-2-4h8V3H3zm2-6h4v4H5zm8 16h8v-8h-8zm2-6h4v4h-4zM13 3v8h8V3zm6 6h-4V5h4z");
}

.l6vagtekn {
  fill: currentColor;
  d: path("M5 5h4v4H5zm0 10h4v4H5zm10 0h4v4h-4zm0-10h4v4h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="l6vagtekn"/><path class="fmobaibnq"/>`,
		"fallback": "ic:twotone-grid-view",
	});
}

export default Component;
