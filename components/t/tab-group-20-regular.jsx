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
		"content": `<style>.hhce-8b5v {
  fill: currentColor;
  d: path("M1 6.5A2.5 2.5 0 0 1 3.5 4h11A2.5 2.5 0 0 1 17 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 1 11.5zM3.5 5A1.5 1.5 0 0 0 2 6.5v5A1.5 1.5 0 0 0 3.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 14.5 5zm2.004 11a2.5 2.5 0 0 1-2-1h11a3.5 3.5 0 0 0 3.5-3.5v-5c.607.456 1 1.182 1 2v3a4.5 4.5 0 0 1-4.5 4.5zM5.5 8.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z");
}
</style><path class="hhce-8b5v"/>`,
		"fallback": "fluent:tab-group-20-regular",
	});
}

export default Component;
