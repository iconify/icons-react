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
		"content": `<style>.ebwpprb3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.188 18.467l-9.145-5.265a1.233 1.233 0 0 0-1.848 1.068V24.8a1.233 1.233 0 0 0 1.848 1.07l9.145-5.266a1.233 1.233 0 0 0 0-2.137");
}

.f06-f5bcy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 32.5v5a5 5 0 0 1-10 0");
}

.x_3o3herz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7 37.5a5 5 0 0 1 5-5h25c2.2 0 4-1.8 4-4v-19c0-2.2-1.8-4-4-4H11c-2.2 0-4 1.8-4 4z");
}
</style><path class="f06-f5bcy"/><path class="x_3o3herz"/><path class="ebwpprb3p"/>`,
		"fallback": "arcticons:playit",
	});
}

export default Component;
