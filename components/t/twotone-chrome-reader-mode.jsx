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
		"content": `<style>.ap6mnrb0q {
  fill: currentColor;
  d: path("M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M11 19H3V6h8zm10 0h-8V6h8zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z");
}

.vy3upmp5d {
  fill: currentColor;
  d: path("M3 6h8v13H3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="vy3upmp5d"/><path class="ap6mnrb0q"/>`,
		"fallback": "ic:twotone-chrome-reader-mode",
	});
}

export default Component;
