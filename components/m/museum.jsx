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
		"content": `<style>.g1vo3xbjp {
  fill: currentColor;
  d: path("M3 21v-1h2V10H3v-.461l9-6.308l9 6.307V10h-2v10h2v1zm5.616-3.5h1V13L12 16.538L14.385 13v4.5h1v-6h-1.116L12 14.885L9.73 11.5H8.617z");
}
</style><path class="g1vo3xbjp"/>`,
		"fallback": "material-symbols-light:museum",
	});
}

export default Component;
