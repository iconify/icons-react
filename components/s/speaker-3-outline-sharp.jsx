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
		"content": `<style>.zc0s-qbln {
  fill: currentColor;
  d: path("M6 19h12V4H6zm2 3v-1H4V2h16v19h-4v1zm4-10.5");
}
</style><path class="zc0s-qbln"/>`,
		"fallback": "material-symbols:speaker-3-outline-sharp",
	});
}

export default Component;
