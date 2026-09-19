import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ljti_cb7g {
  cx: 24px;
  cy: 12.702px;
  r: 7.202px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.py6m_nbpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.5c6.08 0 11.512-2.764 15.115-7.102c-1.338-7.136-7.59-12.54-15.115-12.54s-13.777 5.404-15.115 12.54C12.488 39.736 17.92 42.5 24 42.5");
}
</style><path class="py6m_nbpq"/><circle class="ljti_cb7g"/>`,
		"fallback": "arcticons:samsung-contacts",
	});
}

export default Component;
