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
		"content": `<style>.u65v5juro {
  fill: currentColor;
  d: path("M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7z");
}

.vkyd5mbyv {
  fill: currentColor;
  d: path("m14.24 12l.4 2H18V8h-5.24l-.4-2H7v6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="vkyd5mbyv"/><path class="u65v5juro"/>`,
		"fallback": "ic:twotone-assistant-photo",
	});
}

export default Component;
