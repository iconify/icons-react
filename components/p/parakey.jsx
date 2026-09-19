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
		"content": `<style>.ddz8qu54x {
  cx: 15.515px;
  cy: 23.985px;
  r: 1.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k9dd2dbjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11 36.5c0-3.324 2.676-6 6-6h14c3.324 0 6-2.676 6-6v-14c0-3.324-2.676-6-6-6H17c-3.324 0-6 2.676-6 6v7c7.18 0 13 5.82 13 13s-5.82 13-13 13z");
}
</style><path class="k9dd2dbjt"/><circle class="ddz8qu54x"/>`,
		"fallback": "arcticons:parakey",
	});
}

export default Component;
