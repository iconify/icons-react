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
		"content": `<style>.s4ihmkbqo {
  fill: currentColor;
  d: path("M6.77 21v-3.77H3v-3.307h1v2.308h2.77V6.769h9.46V4h-2.307V3h3.308v3.77H21V21zM3 11.539V8.692h1v2.846zm0-5.231V3h3.308v1H4v2.308zM8.692 4V3h2.846v1z");
}
</style><path class="s4ihmkbqo"/>`,
		"fallback": "material-symbols-light:tab-inactive-sharp",
	});
}

export default Component;
