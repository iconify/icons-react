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
		"content": `<style>.uz07ck55l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.991 40.491L5.5 24L21.991 7.509m4.018 32.982L42.5 24L26.009 7.509");
}
</style><path class="uz07ck55l"/>`,
		"fallback": "arcticons:sams-club",
	});
}

export default Component;
