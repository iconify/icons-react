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
		"content": `<style>.brs0a1bok {
  fill: currentColor;
  d: path("M5 18h4.99L9 17l.93-.94C7.55 16.33 5.2 17.37 5 18");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.cy_l2-9tq {
  cx: 11px;
  cy: 8px;
  r: 2px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}

.h5eq0tb-w {
  fill: currentColor;
  d: path("M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-1 12H5c.2-.63 2.55-1.67 4.93-1.94h.03l.46-.45L12 14.06a9 9 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9zm10.6-5.5l-5.13 5.17l-2.07-2.08L12 17l3.47 3.5L22 13.91z");
}
</style><circle class="cy_l2-9tq"/><path class="brs0a1bok"/><path class="h5eq0tb-w"/>`,
		"fallback": "ic:twotone-how-to-reg",
	});
}

export default Component;
