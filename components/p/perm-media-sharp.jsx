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
		"content": `<style>.g_-_6xbqe {
  fill: currentColor;
  d: path("M1 21V6h2v13h17v2zm4-4V2h7l2 2h9v13zm4-4h10l-3.45-4.5l-2.3 3l-1.55-2z");
}
</style><path class="g_-_6xbqe"/>`,
		"fallback": "material-symbols:perm-media-sharp",
	});
}

export default Component;
