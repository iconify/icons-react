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
		"content": `<style>.p1il8w_xo {
  fill: currentColor;
  d: path("M2 19V5h20v14zM4.5 6H3v12h1.5zm1 12h13V6h-13zm14-12v12H21V6zm0 0H21zm-15 0H3z");
}
</style><path class="p1il8w_xo"/>`,
		"fallback": "material-symbols-light:tablet-outline-sharp",
	});
}

export default Component;
