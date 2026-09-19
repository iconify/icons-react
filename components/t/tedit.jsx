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
		"content": `<style>.kqdganb3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.909 4.5h25.837m-27.492 39l14.573-39M22.129 24h8.33M14.842 43.5h16.801");
}
</style><path class="kqdganb3y"/>`,
		"fallback": "arcticons:tedit",
	});
}

export default Component;
