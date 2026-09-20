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
		"content": `<style>.yfmsqtbnc {
  fill: currentColor;
  d: path("M11.5 21v-5.2l-2.1 2.1l-.708-.708L12 13.885l3.308 3.307l-.708.708l-2.1-2.1V21zM5 12.5v-1h14v1zm7-2.384L8.692 6.808L9.4 6.1l2.1 2.1V3h1v5.2l2.1-2.1l.708.708z");
}
</style><path class="yfmsqtbnc"/>`,
		"fallback": "material-symbols-light:vertical-align-center-outline-sharp",
	});
}

export default Component;
