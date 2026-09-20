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
		"content": `<style>.sqke-lb4v {
  fill: currentColor;
  d: path("m13 17l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17zm-9 0v-2h2v2zm4 0l2-8H6V7h6v2.05L10 17z");
}
</style><path class="sqke-lb4v"/>`,
		"fallback": "material-symbols:speed-0-7x-outline-sharp",
	});
}

export default Component;
