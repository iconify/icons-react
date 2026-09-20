import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ukvxyccbk {
  fill: currentColor;
  d: path("M224.49 76.2L179.8 31.51a12 12 0 0 0-17 0L39.51 154.83a12 12 0 0 0-3.51 8.48V208a12 12 0 0 0 12 12h44.69a11.93 11.93 0 0 0 8.48-3.51l88.67-88.67l5.73 23l-38.39 38.4a4 4 0 1 0 5.65 5.66l40-40a4 4 0 0 0 1.06-3.8l-7.46-29.8l28.06-28.06a12 12 0 0 0 0-17.02M44 208v-38.34L86.35 212H48a4 4 0 0 1-4-4m52 2.34L45.66 160L136 69.66L186.35 120ZM218.83 87.51L192 114.34L141.66 64l26.83-26.83a4 4 0 0 1 5.66 0l44.68 44.69a4 4 0 0 1 0 5.65");
}
</style><path class="ukvxyccbk"/>`,
		"fallback": "ph:pen-thin",
	});
}

export default Component;
