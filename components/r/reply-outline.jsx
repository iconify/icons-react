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
		"content": `<style>.iekvl_2_q {
  fill: currentColor;
  d: path("M19 18v-3q0-1.442-1.029-2.471T15.5 11.5H5.921l4.1 4.1l-.713.708L4 11l5.308-5.308l.713.708l-4.1 4.1H15.5q1.864 0 3.182 1.318T20 15v3z");
}
</style><path class="iekvl_2_q"/>`,
		"fallback": "material-symbols-light:reply-outline",
	});
}

export default Component;
