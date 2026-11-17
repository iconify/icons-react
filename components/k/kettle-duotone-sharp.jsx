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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.rb8whx5-l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 3h12v14H7V6Z");
}

.w_mgzj-rr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3h12v14H7V6zm12 4h4v6h-4M6 21h12");
}
</style><g class="ft5dv1b6b"><path class="rb8whx5-l"/><path class="w_mgzj-rr"/></g>`,
		"fallback": "coolicons:kettle-duotone-sharp",
	});
}

export default Component;
