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
		"content": `<style>.hx6wibc_i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24");
}

.q3ywikq0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5C24 33.626 33.626 24 45.5 24zm-3.996-25.619v2.898m7.991-2.898v2.898m2.505 2.648a9.19 9.19 0 0 1-13 0");
}
</style><path class="hx6wibc_i"/><path class="q3ywikq0d"/>`,
		"fallback": "arcticons:stickers",
	});
}

export default Component;
