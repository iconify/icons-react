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
		"content": `<style>.zwsu_wbjt {
  fill: currentColor;
  d: path("M3 5.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-1a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4.5 4.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm-2.5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="zwsu_wbjt"/>`,
		"fallback": "fluent:text-bullet-list-tree-20-regular",
	});
}

export default Component;
