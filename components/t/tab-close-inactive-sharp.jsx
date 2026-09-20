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
		"content": `<style>.q4yyqiknw {
  fill: currentColor;
  d: path("M13.654 20v-1h3.23v1zm-5 0v-1h3.538v1zM4.5 9.846h-1v-3.23h1zm0 5h-1v-3.538h1zM7.192 20H3.5v-3.692h1V19h2.692zm4.208-7.211l2.1-2.1l2.1 2.1l.688-.689l-2.1-2.1l2.1-2.1l-.688-.689l-2.1 2.1l-2.1-2.1l-.688.689l2.1 2.1l-2.1 2.1zM6.5 17V3h14v14z");
}
</style><path class="q4yyqiknw"/>`,
		"fallback": "material-symbols-light:tab-close-inactive-sharp",
	});
}

export default Component;
