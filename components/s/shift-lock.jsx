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
		"content": `<style>.u63g9u3in {
  fill: currentColor;
  d: path("M8 18v-5H3l9-11l9 11h-5v5zm-4 4v-2h16v2z");
}
</style><path class="u63g9u3in"/>`,
		"fallback": "material-symbols:shift-lock",
	});
}

export default Component;
