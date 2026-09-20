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
		"content": `<style>.t04xfgbap {
  fill: currentColor;
  d: path("M4 22V2h16v20zm3-4h10l-3.375-4.5L11 17l-1.625-2.175zm4-7l2.5-1.5L16 11V4h-5z");
}
</style><path class="t04xfgbap"/>`,
		"fallback": "material-symbols:photo-album-sharp",
	});
}

export default Component;
