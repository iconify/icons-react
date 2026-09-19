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
		"content": `<style>.iaep_qpkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.741 8.763C11.323 8.763 4.5 15.585 4.5 24s6.824 15.237 15.241 15.237a15.24 15.24 0 0 0 14.706-11.316l2.578-9.579s1.56-6.915 6.475-9.578z");
}

.x-blltjjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.44 39.14l5.598-20.798s1.56-6.915 6.475-9.579M11.999 37.128l5.057-18.786s1.56-6.915 6.474-9.579");
}
</style><path class="iaep_qpkv"/><path class="x-blltjjm"/>`,
		"fallback": "arcticons:kagawabank",
	});
}

export default Component;
