import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qvoyghb0b {
  fill: currentColor;
  d: path("M4 5.5A1.5 1.5 0 0 1 5.5 4h2a.5.5 0 0 0 0-1h-2A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h2a.5.5 0 0 0 0-1h-2A1.5 1.5 0 0 1 4 14.5zM12.5 3a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 1 16 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3zM10 5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H10z");
}
</style><path class="qvoyghb0b"/>`,
		"fallback": "fluent:shifts-open-20-regular",
	});
}

export default Component;
