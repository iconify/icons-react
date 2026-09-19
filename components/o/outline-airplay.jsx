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
		"content": `<style>.av79orfll {
  fill: currentColor;
  d: path("M6 22h12l-6-6z");
}

.kw3mck_6h {
  fill: currentColor;
  d: path("M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2");
}
</style><path class="av79orfll"/><path class="kw3mck_6h"/>`,
		"fallback": "ic:outline-airplay",
	});
}

export default Component;
