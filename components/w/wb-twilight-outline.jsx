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
		"content": `<style>.mifajxbsw {
  fill: currentColor;
  d: path("m17.966 9.792l-.708-.719l1.727-1.715l.707.708zM2.5 19.5v-1h19v1zm9-12.27V4.847h1v2.385zM6.034 9.78L4.32 8.055l.708-.708l1.727 1.727zM7.426 14h9.15q-.575-1.35-1.81-2.175Q13.532 11 12 11t-2.765.825Q8 12.65 7.425 14m-1.31 1q.347-2.175 2.009-3.588T12 10t3.876 1.413T17.884 15zM12 14");
}
</style><path class="mifajxbsw"/>`,
		"fallback": "material-symbols-light:wb-twilight-outline",
	});
}

export default Component;
