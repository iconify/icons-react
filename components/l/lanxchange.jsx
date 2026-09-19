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
		"content": `<style>.sykfadwpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24L5.5 5.5s8.75 17.633 9.25 18.5c-.5.868-9.25 18.5-9.25 18.5zl18.5 18.5S33.75 24.868 33.25 24c.499-.864 9.25-18.5 9.25-18.5Z");
}
</style><path class="sykfadwpy"/>`,
		"fallback": "arcticons:lanxchange",
	});
}

export default Component;
