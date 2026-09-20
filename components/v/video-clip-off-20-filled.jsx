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
		"content": `<style>.bt6vr9b_v {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708l.739.738A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11q.362-.001.695-.098l.951.952a.5.5 0 0 0 .708-.708zm8.078 9.493l-2.156 1.428A.5.5 0 0 1 8 12.65V8.707zm1.844-1.22l-.142.094l5.104 5.103A2.5 2.5 0 0 0 18 14.5v-9A2.5 2.5 0 0 0 15.5 3H5.121l4.797 4.797l2.847 1.78a.5.5 0 0 1 .011.841");
}
</style><path class="bt6vr9b_v"/>`,
		"fallback": "fluent:video-clip-off-20-filled",
	});
}

export default Component;
