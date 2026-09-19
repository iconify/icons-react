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
		"content": `<style>.lv2-0tbta {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.3 4.5h2.3c1.1 0 2 .9 2 2v35c0 1.1-.9 2-2 2h-2.3m0-39v39H10.4c-1.1 0-2-.9-2-2v-35c0-1.1.9-2 2-2zM8.445 17.833h31.093M8.445 31.166h31.093");
}
</style><path class="lv2-0tbta"/>`,
		"fallback": "arcticons:migraine-log",
	});
}

export default Component;
