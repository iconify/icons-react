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
		"content": `<style>.nv1xuebqv {
  fill: currentColor;
  d: path("M3 21V3h9v2H5v14h14v-7h2v9zm6.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z");
}
</style><path class="nv1xuebqv"/>`,
		"fallback": "material-symbols:open-in-new-outline-sharp",
	});
}

export default Component;
