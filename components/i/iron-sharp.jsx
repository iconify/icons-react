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
		"content": `<style>.m24fvrb2z {
  fill: currentColor;
  d: path("M2 18v-3q0-1.65 1.175-2.825T6 11h9V9H9v1H7V7h10v7h1V6h4v2h-2v8h-3v2z");
}
</style><path class="m24fvrb2z"/>`,
		"fallback": "material-symbols:iron-sharp",
	});
}

export default Component;
