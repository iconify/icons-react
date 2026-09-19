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
		"content": `<style>.b-8w_g1hq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.895 12.743a8.75 8.75 0 0 1-8.75 8.75");
}

.zratz2i3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24c0 10.544-7.59 19.315-17.604 21.148m-.001-32.405v32.395");
}
</style><path class="zratz2i3o"/><path class="b-8w_g1hq"/>`,
		"fallback": "arcticons:onecall",
	});
}

export default Component;
