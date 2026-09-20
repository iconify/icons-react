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
		"content": `<style>.xh1c8sytg {
  fill: currentColor;
  d: path("M4 21V6.616h2.827V2.769h10.365v3.847H20V21zM7.827 6.615h8.365V3.77H7.827zm4.16 11.231q1.676 0 2.864-1.187t1.187-2.842t-1.187-2.85q-1.188-1.198-2.865-1.198t-2.85 1.197t-1.175 2.851q0 1.654 1.174 2.842t2.851 1.187m1.087-2.419l.527-.527l-1.234-1.254v-2.108h-.731v2.431z");
}
</style><path class="xh1c8sytg"/>`,
		"fallback": "material-symbols-light:punch-clock",
	});
}

export default Component;
