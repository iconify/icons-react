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
		"content": `<style>.fss6wuiwn {
  fill: currentColor;
  d: path("M6.712 17.308V3H21v14.308zM6.692 21v-1.23h1.231V21zM4.231 6.23H3V5h1.23zM10.385 21v-1.23h1.23V21zm3.692 0v-1.23h1.23V21zM3 21v-1.23h1.23V21zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm14.77 9.846H19V21h-1.23zM13.384 7.192H20V4h-6.615z");
}
</style><path class="fss6wuiwn"/>`,
		"fallback": "material-symbols-light:tab-duplicate-sharp",
	});
}

export default Component;
