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
		"content": `<style>.xckjz4b9z {
  fill: currentColor;
  d: path("M9.594 11.616V6H20v5.616zM15.175 18v-5.615H20V18zm-5.58 0v-5.615h4.81V18zM4 18V6h4.825v12z");
}
</style><path class="xckjz4b9z"/>`,
		"fallback": "material-symbols-light:view-quilt-sharp",
	});
}

export default Component;
