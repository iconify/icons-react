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
		"content": `<style>.hlsp_ybkb {
  fill: currentColor;
  d: path("M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4l-4-4l-1.41 1.41L18.17 11zM9 9c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3");
}

.kpas95jnq {
  cx: 9px;
  cy: 12px;
  r: 3px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><circle class="kpas95jnq"/><path class="hlsp_ybkb"/>`,
		"fallback": "ic:twotone-swipe-right-alt",
	});
}

export default Component;
