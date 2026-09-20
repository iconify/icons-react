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
		"content": `<style>.hgvo2acwh {
  fill: currentColor;
  d: path("M4 16V8h16v1.633q-.125-.012-.244-.015q-.118-.003-.256-.003q-2.384 0-4.038 1.654t-1.654 4.039q0 .178.006.347t.03.345zm15 3v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="hgvo2acwh"/>`,
		"fallback": "material-symbols-light:variable-add-sharp",
	});
}

export default Component;
