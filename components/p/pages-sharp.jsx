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
		"content": `<style>.b7axvgf-n {
  fill: currentColor;
  d: path("M4 20V4h16v16zm5.517-4.442L12 14.052l2.483 1.506l-.66-2.825l2.196-1.885l-2.886-.256L12 7.942l-1.133 2.65l-2.886.256l2.196 1.885z");
}
</style><path class="b7axvgf-n"/>`,
		"fallback": "material-symbols-light:pages-sharp",
	});
}

export default Component;
