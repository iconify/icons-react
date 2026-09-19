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
		"content": `<style>.t9255xbxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 17.229l6.602.703m-3.138-7.393l4.38 3.565m2.297-7.581l1.155 5.535m23.708 23.357q-5.12 5.247-11.496 5.874M42.5 38.264q-1.632 2.196-4.443 3.213m-19.05-6.401V20.04h4.886a5.053 5.053 0 0 1 5.075 5.032v.043a5.053 5.053 0 0 1-5.032 5.074h-4.929");
}
</style><path class="t9255xbxu"/>`,
		"fallback": "arcticons:phenix",
	});
}

export default Component;
