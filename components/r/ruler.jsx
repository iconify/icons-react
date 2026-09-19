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
		"content": `<style>.wd35dktxn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.578 29.985L29.908 5.5l12.514 12.36L17.937 42.5zM31.775 14.39l-5.428-5.307m-.353 8.157l-3.967-3.809m1.143 9.619l-5.427-5.307m-3.398 14.188l-5.428-5.307m8.239-.489l-3.967-3.81");
}
</style><path class="wd35dktxn"/>`,
		"fallback": "arcticons:ruler",
	});
}

export default Component;
