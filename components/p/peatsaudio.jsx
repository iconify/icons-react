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
		"content": `<style>.jrnbwlw1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.286 13.775V5.5H7.714v10.308l32.16 8.45C37.696 32.82 32.657 38.25 24.288 42.5C14.845 39.419 7.993 29.026 7.714 24.258");
}
</style><path class="jrnbwlw1w"/>`,
		"fallback": "arcticons:peatsaudio",
	});
}

export default Component;
