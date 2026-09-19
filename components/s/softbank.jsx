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
		"content": `<style>.ihtn76qxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 9.9h39v9.4h-39zm0 18.8h39v9.4h-39z");
}
</style><path class="ihtn76qxd"/>`,
		"fallback": "arcticons:softbank",
	});
}

export default Component;
