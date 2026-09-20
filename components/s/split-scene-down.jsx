import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cgt0-453j {
  fill: currentColor;
  d: path("M5 9.116v-3.5q0-.691.463-1.153T6.616 4h10.769q.69 0 1.153.463T19 5.616v3.5zM6.616 20q-.691 0-1.153-.462T5 18.384V12.5H3v-1h18v1h-2v5.885q0 .69-.462 1.152T17.384 20z");
}
</style><path class="cgt0-453j"/>`,
		"fallback": "material-symbols-light:split-scene-down",
	});
}

export default Component;
