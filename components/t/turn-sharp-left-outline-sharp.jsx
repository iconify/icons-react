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
		"content": `<style>.lex20mbqb {
  fill: currentColor;
  d: path("M16.5 20v-5.884h-10v-8.2l-2.1 2.1l-.708-.708L7 4l3.308 3.308l-.708.708l-2.1-2.1v7.2h10V20z");
}
</style><path class="lex20mbqb"/>`,
		"fallback": "material-symbols-light:turn-sharp-left-outline-sharp",
	});
}

export default Component;
