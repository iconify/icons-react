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
		"content": `<style>.yilqglbuj {
  fill: currentColor;
  d: path("M10 14v-4h4v4zm1-1h2v-2h-2zm-1.5 6.539V18H6v-3.5H4.462v-1H6v-3H4.462v-1H6V6h3.5V4.462h1V6h3V4.462h1V6H18v3.5h1.539v1H18v3h1.539v1H18V18h-3.5v1.539h-1V18h-3v1.539zM17 17V7H7v10zm-5-5");
}
</style><path class="yilqglbuj"/>`,
		"fallback": "material-symbols-light:memory-outline-sharp",
	});
}

export default Component;
