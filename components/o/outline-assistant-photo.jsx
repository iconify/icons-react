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
		"content": `<style>.l3-3swbio {
  fill: currentColor;
  d: path("m12.36 6l.08.39l.32 1.61H18v6h-3.36l-.08-.39l-.32-1.61H7V6zM14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z");
}
</style><path class="l3-3swbio"/>`,
		"fallback": "ic:outline-assistant-photo",
	});
}

export default Component;
