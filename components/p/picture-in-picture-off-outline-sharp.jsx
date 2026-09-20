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
		"content": `<style>.f-66iubaz {
  fill: currentColor;
  d: path("M15.85 13H19V7h-8v1.15l2 2V9h4v2h-3.15zM20 17.15V6H8.85l-2-2H22v15.15zm.45 6.15l-3.3-3.3H2V4h2l2 2H4v12h11.15L.65 3.5l1.425-1.425l19.8 19.8z");
}
</style><path class="f-66iubaz"/>`,
		"fallback": "material-symbols:picture-in-picture-off-outline-sharp",
	});
}

export default Component;
