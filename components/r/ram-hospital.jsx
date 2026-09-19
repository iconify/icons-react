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
		"content": `<style>.meq2mybzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.146 30.855H3.622v-13.71h13.525l13.708 13.71m-13.708 0h13.708v13.523h-13.71V33.746");
}

.nocrnxd3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.145 17.147V3.622h13.71v13.525zm13.71-.002h13.523v13.71H30.855z");
}
</style><path class="nocrnxd3w"/><path class="meq2mybzr"/>`,
		"fallback": "arcticons:ram-hospital",
	});
}

export default Component;
