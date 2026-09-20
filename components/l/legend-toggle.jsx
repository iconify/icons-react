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
		"content": `<style>.bxlbnswxu {
  fill: currentColor;
  d: path("M4 19v-2h16v2zm0-4v-2h16v2zm0-4V8.65L10 5l5 3.55L20 5v2.45L15 11L9.925 7.4z");
}
</style><path class="bxlbnswxu"/>`,
		"fallback": "material-symbols:legend-toggle",
	});
}

export default Component;
