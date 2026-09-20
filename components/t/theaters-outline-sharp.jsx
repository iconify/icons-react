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
		"content": `<style>.o-iqvqb3l {
  fill: currentColor;
  d: path("M4.5 20.5v-17h1v2h3v-2h7v2h3v-2h1v17h-1v-2h-3v2h-7v-2h-3v2zm1-3h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm10 8h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm-6 10h5v-15h-5zm0-15h5z");
}
</style><path class="o-iqvqb3l"/>`,
		"fallback": "material-symbols-light:theaters-outline-sharp",
	});
}

export default Component;
