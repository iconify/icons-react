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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.j2gvh_b4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.407 25.286a3.286 3.286 0 0 1-3.286 3.286h0a3.286 3.286 0 0 1-3.286-3.286V23.15a3.286 3.286 0 0 1 3.286-3.286h0a3.286 3.286 0 0 1 3.286 3.286m0 5.423v-8.709m-9.834 8.709V23.15a3.286 3.286 0 0 0-3.287-3.286h0A3.286 3.286 0 0 0 12 23.15m0 5.423v-8.709m21.376 8.709V17.728a2.3 2.3 0 0 1 2.3-2.3h0c1.133 0 1.84.335 2.324.962m-6.573 3.474h4.601");
}
</style><path class="i9clfwm2k"/><path class="j2gvh_b4n"/>`,
		"fallback": "arcticons:newsasfacts",
	});
}

export default Component;
