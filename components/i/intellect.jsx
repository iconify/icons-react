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
		"content": `<style>.ajt6rfbwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.067 33.365c0-5.597-10.134-23.347-10.134-23.347S8.798 27.768 8.798 33.365a10.135 10.135 0 1 0 20.27 0");
}

.mrukscc2w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.98 37.924a10 10 0 0 0 1.087.058a10.135 10.135 0 0 0 10.135-10.135C39.202 22.25 29.067 4.5 29.067 4.5s-3.53 6.184-6.424 12.402");
}
</style><path class="ajt6rfbwn"/><path class="mrukscc2w"/>`,
		"fallback": "arcticons:intellect",
	});
}

export default Component;
