import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ocv62xb6b {
  fill: currentColor;
  d: path("M17 10c.1 0 .19.01.28.01L3 4v6l8 2l-8 2v6l7-2.95V17c0-3.86 3.14-7 7-7");
}

.qufhvogco {
  fill: currentColor;
  d: path("M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85z");
}
</style><path class="ocv62xb6b"/><path class="qufhvogco"/>`,
		"fallback": "ic:sharp-schedule-send",
	});
}

export default Component;
