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
		"content": `<style>.vxq6qkb4h {
  fill: currentColor;
  d: path("m17.966 9.792l-.708-.719l1.727-1.715l.707.708zM2.5 19.5v-1h19v1zm9-12.27V4.847h1v2.385zM6.034 9.78L4.32 8.055l.708-.708l1.727 1.727zM6.116 15q.346-2.175 2.008-3.588T12 10t3.876 1.413T17.884 15z");
}
</style><path class="vxq6qkb4h"/>`,
		"fallback": "material-symbols-light:wb-twilight",
	});
}

export default Component;
