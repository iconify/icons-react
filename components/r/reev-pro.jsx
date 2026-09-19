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
		"content": `<style>.xfkvxob0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.5 33.25v9.25h33L28.3 24h2.95a9.25 9.25 0 0 0 0-18.5H7.5v9.25M16.75 24H7.5");
}
</style><path class="xfkvxob0k"/>`,
		"fallback": "arcticons:reev-pro",
	});
}

export default Component;
