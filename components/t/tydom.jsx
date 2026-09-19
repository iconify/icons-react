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
		"content": `<style>.kdb7kshkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.5v-37M24 24H5.5m0 0L24 42.5m10.5-37h-25a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h25a8 8 0 0 0 8-8v-21a8 8 0 0 0-8-8");
}
</style><path class="kdb7kshkv"/>`,
		"fallback": "arcticons:tydom",
	});
}

export default Component;
