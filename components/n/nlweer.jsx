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
		"content": `<style>.r21ly5bgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.998 24.71C5.92 23.397 4.5 20.992 4.5 18.37c0-4.153 3.388-7.542 7.542-7.542c2.404 0 4.48 1.093 5.902 2.842");
}

.v98l0ybvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.244 23.179c-1.53-12.35 14.209-13.553 15.957-2.186c3.826-2.951 8.635.328 7.76 5.356c8.963.109 7.651 10.601 2.405 10.82H10.95c-7.76.219-9.29-13.553 2.295-13.99l-.328-.219");
}
</style><path class="v98l0ybvv"/><path class="r21ly5bgl"/>`,
		"fallback": "arcticons:nlweer",
	});
}

export default Component;
