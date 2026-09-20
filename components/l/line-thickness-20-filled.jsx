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
		"content": `<style>.m92g_dgdw {
  fill: currentColor;
  d: path("M2.75 4a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zM2 9.25C2 8.56 2.56 8 3.25 8h13.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 10.5 2 9.94 2 9.25m0 5.5c0-.966.784-1.75 1.75-1.75h12.5a1.75 1.75 0 1 1 0 3.5H3.75A1.75 1.75 0 0 1 2 14.75");
}
</style><path class="m92g_dgdw"/>`,
		"fallback": "fluent:line-thickness-20-filled",
	});
}

export default Component;
