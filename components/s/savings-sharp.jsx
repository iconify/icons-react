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
		"content": `<style>.icz_nv20b {
  fill: currentColor;
  d: path("M16.54 10.54q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23M8 8.5h5v-1H8zM5.25 20q-.734-2.62-1.492-5.197T3 9.5q0-1.877 1.312-3.189T7.5 5H13q.648-.854 1.532-1.427T16.5 3q.202 0 .351.13t.149.332t-.087.344q-.138.448-.245.88t-.195.885L19.402 8.5H21v5.244l-2.633.868L16.75 20H13v-2H9v2z");
}
</style><path class="icz_nv20b"/>`,
		"fallback": "material-symbols-light:savings-sharp",
	});
}

export default Component;
