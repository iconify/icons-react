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
		"content": `<style>.yz424mbfo {
  fill: currentColor;
  d: path("M12.175 21.4L3.75 13H6.6l7 7l5-5H16v-2h6v6h-2v-2.6l-5 5q-.575.575-1.412.575t-1.413-.575M2 11V5h2v2.6l5-5q.575-.575 1.413-.575t1.412.575L20.25 11H17.4l-7-7l-5 5H8v2z");
}
</style><path class="yz424mbfo"/>`,
		"fallback": "material-symbols:screen-rotation-alt-outline",
	});
}

export default Component;
