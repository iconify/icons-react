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
		"content": `<style>.v5kwmfbce {
  fill: currentColor;
  d: path("M9 20v-2H3V4h18v4.5h-1V5H4v12h16v-5.5h-8.392l2.35 2.35l-.708.708L9.692 11l3.558-3.558l.708.708l-2.35 2.35H21V18h-6v2zm3.5-9");
}
</style><path class="v5kwmfbce"/>`,
		"fallback": "material-symbols-light:reset-tv-outline-sharp",
	});
}

export default Component;
