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
		"content": `<style>.pzqp3ibvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.022 24L7.979 5.5v37zM18.66 11.667v24.667m10.68-18.501v12.333");
}
</style><path class="pzqp3ibvn"/>`,
		"fallback": "arcticons:rtp-play",
	});
}

export default Component;
