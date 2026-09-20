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
		"content": `<style>.c2mb--i-l {
  fill: currentColor;
  d: path("M2 20V4h16v6.5l4-4v11l-4-4V20zm2-2h12V6H4zm0 0V6zm5-2h2v-3h3v-2h-3V8H9v3H6v2h3z");
}
</style><path class="c2mb--i-l"/>`,
		"fallback": "material-symbols:video-call-outline-sharp",
	});
}

export default Component;
