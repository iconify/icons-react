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
		"content": `<style>.a8opedcca {
  cx: 16.5px;
  cy: 16.5px;
  r: 1.5px;
  fill: currentColor;
}

.dr36jwb_v {
  cx: 7.5px;
  cy: 16.5px;
  r: 1.5px;
  fill: currentColor;
}

.i7_3f4-oc {
  fill: currentColor;
  d: path("M17 5c.83 0 1.5-.67 1.5-1.5c0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5m-5 0c.83 0 1.5-.67 1.5-1.5c0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5M7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5m11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8zM6.85 9h10.29l1.04 3H5.81zM19 19H5v-4.66l.12-.34h13.77l.11.34z");
}
</style><path class="i7_3f4-oc"/><circle class="dr36jwb_v"/><circle class="a8opedcca"/>`,
		"fallback": "ic:outline-local-car-wash",
	});
}

export default Component;
