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
		"content": `<style>.b5e3fcb2q {
  fill: currentColor;
  d: path("M9.5 21h8.25A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H9.5zM8 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21H8z");
}
</style><path class="b5e3fcb2q"/>`,
		"fallback": "fluent:layout-column-one-third-left-24-filled",
	});
}

export default Component;
