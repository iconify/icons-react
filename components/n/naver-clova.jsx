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
		"content": `<style>.h4brazbeb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 39.326c-4.232 4.232-11.094 4.232-15.326 0S4.442 28.232 8.674 24c-4.232-4.232-4.232-11.094 0-15.326s11.094-4.232 15.326 0c4.232-4.232 11.094-4.232 15.326 0s4.232 11.094 0 15.326c4.232 4.232 4.232 11.094 0 15.326s-11.094 4.232-15.326 0");
}

.nkqnq4b0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 35.304A8.28 8.28 0 1 1 12.696 24A8.28 8.28 0 1 1 24 12.696A8.28 8.28 0 1 1 35.304 24A8.28 8.28 0 1 1 24 35.304");
}
</style><path class="h4brazbeb"/><path class="nkqnq4b0h"/>`,
		"fallback": "arcticons:naver-clova",
	});
}

export default Component;
