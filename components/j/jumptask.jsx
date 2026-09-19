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
		"content": `<style>.uja1d4fsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.878 4.5v31.122a7.878 7.878 0 0 1-15.756 0V14.355");
}

.zilou829v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.223 17.254l2.899-2.899l2.899 2.899m9.958-9.855L31.878 4.5l2.899 2.899");
}
</style><path class="uja1d4fsn"/><path class="zilou829v"/>`,
		"fallback": "arcticons:jumptask",
	});
}

export default Component;
