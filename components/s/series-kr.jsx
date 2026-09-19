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
		"content": `<style>.dfk_jyb9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.391 14.75H30.61v2.641l11.89 1.326v-7.934c0-3.957-1.326-5.283-5.283-5.283H12.11c-3.97 0-6.61 2.641-6.61 6.609V24c0 1.326 1.326 2.641 2.641 2.641l22.468 1.326v5.283H17.39v-2.641L5.5 29.283v7.934c0 3.957 1.326 5.283 5.283 5.283H35.89c3.968 0 6.609-2.641 6.609-6.609V24c0-1.326-1.326-2.641-2.641-2.641L17.39 20.033z");
}
</style><path class="dfk_jyb9t"/>`,
		"fallback": "arcticons:series-kr",
	});
}

export default Component;
