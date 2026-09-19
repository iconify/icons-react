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
		"content": `<style>.f4999ab2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.105 33.705V22.486A13.694 13.694 0 0 0 28.1 9.33v-1.1a3.73 3.73 0 1 0-7.46 0v1.099a13.694 13.694 0 0 0-10.005 13.157v11.22L7.34 38.958a1.166 1.166 0 0 0 .988 1.786h31.344a1.166 1.166 0 0 0 1.048-1.678Zm-17.787 7.04a3.839 3.839 0 0 0 7.364 0");
}
</style><path class="f4999ab2g"/>`,
		"fallback": "arcticons:nextcloud-services",
	});
}

export default Component;
