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
		"content": `<style>.oxt5zcc2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.168 21.12l-3.157 8.364l-3.156-8.364m-8.156 7.658c.576.484 1.198.706 2.596.706h.708a2.09 2.09 0 0 0 2.086-2.091a2.09 2.09 0 0 0-2.086-2.091h-1.416A2.09 2.09 0 0 1 9.5 23.211c0-1.155.934-2.091 2.087-2.091h.708c1.397 0 2.02.222 2.595.706m12.286-3.31v9.39c0 .871.707 1.578 1.578 1.578h.474m-2.052-8.364h1.657m9.667 4.182l-6.246-4.182v8.364z");
}

.ydqthzbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4");
}
</style><path class="ydqthzbbt"/><path class="oxt5zcc2r"/>`,
		"fallback": "arcticons:svt-play",
	});
}

export default Component;
