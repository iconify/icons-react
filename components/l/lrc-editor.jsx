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
		"content": `<style>.ggqzen30r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 17.594v12.812h6.406m3.046 0V17.594h4.195c2.37 0 4.293 1.926 4.293 4.303S25.518 26.2 23.147 26.2h-4.195m4.195 0l4.194 4.203M38.5 26.11v.052c0 2.344-1.9 4.244-4.244 4.244h0a4.244 4.244 0 0 1-4.244-4.244v-4.324c0-2.344 1.9-4.244 4.244-4.244h0c2.344 0 4.244 1.9 4.244 4.244v.053");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="ggqzen30r"/>`,
		"fallback": "arcticons:lrc-editor",
	});
}

export default Component;
