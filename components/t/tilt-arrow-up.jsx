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
		"content": `<style>.cc_ykjbzl {
  fill: currentColor;
  d: path("M5.02 20q-.778 0-1.262-.593q-.485-.594-.304-1.37l2.869-12.77q.13-.546.575-.906Q7.342 4 7.908 4h8.165q.566 0 1.01.36q.444.361.575.907l2.888 12.77q.181.777-.304 1.37q-.484.593-1.261.593zm6.46-9.079v4.695h1V10.92l2.12 2.114l.708-.708L11.98 9l-3.289 3.289l.708.713z");
}
</style><path class="cc_ykjbzl"/>`,
		"fallback": "material-symbols-light:tilt-arrow-up",
	});
}

export default Component;
