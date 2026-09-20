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
		"content": `<style>.zl4mjha5a {
  fill: currentColor;
  d: path("M11.385 16.5h1.23V14h2.5v-1.23h-2.5v-2.5h-1.23v2.5h-2.5V14h2.5zM6 19.885v-13h12v13zm1-1h10v-11H7zm-.538-13.77v-1h11.077v1zM7 7.886v11z");
}
</style><path class="zl4mjha5a"/>`,
		"fallback": "material-symbols-light:medication-outline-sharp",
	});
}

export default Component;
