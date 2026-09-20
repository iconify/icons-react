import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fqvlam02a {
  fill: currentColor;
  d: path("M1 4.5v5A2.5 2.5 0 0 0 3.5 12H6V6.5h7v-2A2.5 2.5 0 0 0 10.5 2h-7A2.5 2.5 0 0 0 1 4.5m11 0v1H6V3h4.5A1.5 1.5 0 0 1 12 4.5M3.5 3H5v8H3.5A1.5 1.5 0 0 1 2 9.5v-5A1.5 1.5 0 0 1 3.5 3M7 11.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m5-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12z");
}
</style><path class="fqvlam02a"/>`,
		"fallback": "fluent:panel-left-header-add-16-regular",
	});
}

export default Component;
