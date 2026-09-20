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
		"content": `<style>.z47rdsbff {
  fill: currentColor;
  d: path("M4 18V6h2.346v12zm3.73 0V6h8.54v12zm9.924 0V6H20v12zM8.73 17h6.538V7H8.731zM12 12");
}
</style><path class="z47rdsbff"/>`,
		"fallback": "material-symbols-light:view-array-outline-sharp",
	});
}

export default Component;
