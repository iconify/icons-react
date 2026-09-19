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
		"content": `<style>.n6w3g-bwf {
  fill: currentColor;
  d: path("M16 14.14V9.86L12.97 12z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.uokof-bnh {
  fill: currentColor;
  d: path("M6 6h2v12H6zm12 12V6l-8.5 6zm-2-3.86L12.97 12L16 9.86z");
}
</style><path class="n6w3g-bwf"/><path class="uokof-bnh"/>`,
		"fallback": "ic:twotone-skip-previous",
	});
}

export default Component;
