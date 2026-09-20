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
		"content": `<style>.rtwwe_b8w {
  fill: currentColor;
  d: path("M6 18V6h2v12zm4 0l10-6l-10-6zm2-3.525v-4.95L16.125 12zM12 12");
}
</style><path class="rtwwe_b8w"/>`,
		"fallback": "material-symbols:resume-outline",
	});
}

export default Component;
