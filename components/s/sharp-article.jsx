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
		"content": `<style>.am437zbcu {
  fill: currentColor;
  d: path("M3 3v18h18V3zm11 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z");
}
</style><path class="am437zbcu"/>`,
		"fallback": "ic:sharp-article",
	});
}

export default Component;
