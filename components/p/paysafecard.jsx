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
		"content": `<style>.gps6spbdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.417 17.24h17.166a5.584 5.584 0 0 1 5.585 5.585v15.09a5.584 5.584 0 0 1-5.585 5.585H15.417a5.584 5.584 0 0 1-5.585-5.584v-15.09a5.584 5.584 0 0 1 5.585-5.585m-2.905-1.911a11.508 11.508 0 0 1 19.382-7.696a11.64 11.64 0 0 1 3.594 7.695");
}
</style><path class="gps6spbdk"/>`,
		"fallback": "arcticons:paysafecard",
	});
}

export default Component;
