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
		"content": `<style>.tbgg1hewu {
  fill: currentColor;
  d: path("m8.85 22.566l-.708-.708l3.883-3.864l3.864 3.864l-.708.713l-3.156-3.155zm0-5l-.708-.708l3.883-3.864l3.864 3.864l-.708.713l-3.156-3.155zM12.006 11l-3.87-3.87l.714-.732l3.156 3.156l3.169-3.156l.714.714zm0-5l-3.87-3.87l.714-.732l3.156 3.156l3.169-3.156l.714.714z");
}
</style><path class="tbgg1hewu"/>`,
		"fallback": "material-symbols-light:unfold-less-double-outline-sharp",
	});
}

export default Component;
