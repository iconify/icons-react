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
		"content": `<style>.k91rbrbar {
  fill: currentColor;
  d: path("M2 3.75A.75.75 0 0 1 2.75 3h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75m0 4A.75.75 0 0 1 2.75 7h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 7.75M2.75 11a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zM2 15.75a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75");
}
</style><path class="k91rbrbar"/>`,
		"fallback": "fluent:line-horizontal-4-20-filled",
	});
}

export default Component;
