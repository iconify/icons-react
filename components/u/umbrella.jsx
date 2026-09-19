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
		"content": `<style>.wqig7lvne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.806 40.838a3.097 3.097 0 0 0 6.194 0V23.565m-19.5 0a19.5 19.5 0 0 1 39 0a4.875 4.875 0 1 0-9.75 0a4.875 4.875 0 1 0-9.75 0a4.875 4.875 0 1 0-9.75 0a4.875 4.875 0 1 0-9.75 0");
}
</style><path class="wqig7lvne"/>`,
		"fallback": "arcticons:umbrella",
	});
}

export default Component;
