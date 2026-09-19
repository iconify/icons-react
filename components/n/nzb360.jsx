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
		"content": `<style>.tugsx_3ie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.314 41.5v-35l19.209 9.767M40.686 6.5v35l-19.209-9.767");
}
</style><path class="tugsx_3ie"/>`,
		"fallback": "arcticons:nzb360",
	});
}

export default Component;
