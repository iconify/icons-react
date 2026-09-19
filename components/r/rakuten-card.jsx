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
		"content": `<style>.uv2rgzbpd {
  d: path("M8.5 8.5h31c2.216 0 4 1.784 4 4v23c0 2.216-1.784 4-4 4h-31c-2.216 0-4-1.784-4-4v-23c0-2.216 1.784-4 4-4");
}

.wmyv7nb9n {
  d: path("M17.696 29.065V12.35h5.584c3.221 0 5.799 2.507 5.799 5.641s-2.578 5.642-5.8 5.642h-5.583m5.794-.005l5.374 5.228m6.559 3.837l-19.528 2.95l-3.318-2.95z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="uv2rgzbpd"/><path class="wmyv7nb9n"/></g>`,
		"fallback": "arcticons:rakuten-card",
	});
}

export default Component;
