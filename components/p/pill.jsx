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
		"content": `<style>.zws_agquj {
  fill: currentColor;
  d: path("m15.642 14.91l2.997-3.002q.646-.646 1.003-1.498Q20 9.56 20 8.625q0-1.932-1.348-3.278T15.369 4q-.927 0-1.778.358q-.852.358-1.499 1.004L9.091 8.358zM8.632 20q.926 0 1.778-.358q.852-.357 1.498-1.003l3.002-2.997l-6.552-6.551l-2.996 3.001q-.646.646-1.004 1.498Q4 14.44 4 15.375q0 1.932 1.348 3.278T8.632 20");
}
</style><path class="zws_agquj"/>`,
		"fallback": "material-symbols-light:pill",
	});
}

export default Component;
