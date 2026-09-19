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
		"content": `<style>.asbhclbwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 5.5h-37v6.499h18.911l-.126 25.236");
}

.r41jv9bdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 18.292h12.333V42.5h13.03V18.292H42.5v-6.293H30.23");
}
</style><path class="asbhclbwo"/><path class="r41jv9bdb"/>`,
		"fallback": "arcticons:tella",
	});
}

export default Component;
