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
		"content": `<style>.x56bcwl_f {
  fill: currentColor;
  d: path("M9 16h2v-3h3v-2h-3V8H9v3H6v2h3zm-7 4V4h16v6.5l4-4v11l-4-4V20z");
}
</style><path class="x56bcwl_f"/>`,
		"fallback": "material-symbols:video-call-sharp",
	});
}

export default Component;
