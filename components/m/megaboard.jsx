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
		"content": `<style>.egd59tb2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5c11.876 0 21.5 9.624 21.5 21.5S35.876 45.5 24 45.5S2.5 35.876 2.5 24S12.124 2.5 24 2.5");
}

.y3i_h--eq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 6.8c9.501 0 17.2 7.699 17.2 17.2S33.501 41.2 24 41.2S6.8 33.501 6.8 24S14.499 6.8 24 6.8");
}
</style><path class="egd59tb2y"/><path class="y3i_h--eq"/>`,
		"fallback": "arcticons:megaboard",
	});
}

export default Component;
