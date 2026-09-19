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
		"content": `<style>.wzr2yl8dh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.46 13.977a5.084 5.084 0 1 1 0 10.169m0-10.169H4.59m33.87 10.169H9.657m33.901 9.831s-11.172-9.828-19.854-9.828M4.558 33.966V29.23a5.09 5.09 0 0 1 5.1-5.084");
}
</style><path class="wzr2yl8dh"/>`,
		"fallback": "arcticons:relayreddit",
	});
}

export default Component;
