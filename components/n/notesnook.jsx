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
		"content": `<style>.xa-lj1bgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.84 35.638C33.923 40.27 29.325 43.5 24 43.5c-7.091 0-12.84-5.749-12.84-12.84v-5.262m25.68 3.789V17.34C36.84 10.249 31.091 4.5 24 4.5H11.16v13.805");
}
</style><path class="xa-lj1bgh"/>`,
		"fallback": "arcticons:notesnook",
	});
}

export default Component;
