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
		"content": `<style>.xqkagcber {
  fill: currentColor;
  d: path("M8 18v-5H3l9-11l9 11h-5v5zm2-2h4v-5h2.775L12 5.15L7.225 11H10zm-6 6v-2h16v2z");
}
</style><path class="xqkagcber"/>`,
		"fallback": "material-symbols:shift-lock-outline-sharp",
	});
}

export default Component;
