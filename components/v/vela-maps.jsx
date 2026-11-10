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
		"content": `<style>.lq8za4bzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 4.5l15.816 39L24 35.323zm0 0l-15.816 39L24 35.323z");
}
</style><path class="lq8za4bzh"/>`,
		"fallback": "arcticons:vela-maps",
	});
}

export default Component;
