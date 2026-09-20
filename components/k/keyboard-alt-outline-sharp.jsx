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
		"content": `<style>.uw264fbnw {
  fill: currentColor;
  d: path("M2 19V5h20v14zm1-1h18V6H3zm5.654-1.52h6.692v-1.538H8.654zm-3.115-3.25h1.538v-1.538H5.539zm3.788 0h1.539v-1.538H9.327zm3.808 0h1.538v-1.538h-1.538zm3.788 0h1.539v-1.538h-1.539zM5.539 9.98h1.538V8.443H5.539zm3.788 0h1.539V8.443H9.327zm3.808 0h1.538V8.443h-1.538zm3.692.097h1.539V8.539h-1.539zM3 18V6z");
}
</style><path class="uw264fbnw"/>`,
		"fallback": "material-symbols-light:keyboard-alt-outline-sharp",
	});
}

export default Component;
