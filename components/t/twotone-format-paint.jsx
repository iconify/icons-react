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
		"content": `<style>.jejo_6b-v {
  fill: currentColor;
  d: path("M6 4h10v2H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.wsl03gb_s {
  fill: currentColor;
  d: path("M17 2H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3V3c0-.55-.45-1-1-1m-1 4H6V4h10z");
}
</style><path class="jejo_6b-v"/><path class="wsl03gb_s"/>`,
		"fallback": "ic:twotone-format-paint",
	});
}

export default Component;
