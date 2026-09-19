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
		"content": `<style>.enx1qidhg {
  cx: 36.465px;
  cy: 15.816px;
  r: 6.035px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.trw3jhboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.115 38.388c-1.832 0-3.64-.83-4.827-2.406L6.713 19.277a6.036 6.036 0 0 1 9.644-7.259l12.575 16.706a6.036 6.036 0 0 1-4.817 9.663Z");
}
</style><circle class="enx1qidhg"/><path class="trw3jhboq"/>`,
		"fallback": "arcticons:vita",
	});
}

export default Component;
