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
		"content": `<style>.w5r50187d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 42.5V17.833H5.5M30.167 42.5V17.833H42.5M5.5 5.5h37");
}
</style><path class="w5r50187d"/>`,
		"fallback": "arcticons:kakao",
	});
}

export default Component;
