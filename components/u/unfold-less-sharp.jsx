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
		"content": `<style>.w5873umpg {
  fill: currentColor;
  d: path("m8.9 19.308l-.708-.708L12 14.792l3.808 3.808l-.708.708l-3.1-3.1zm3.1-10.1L8.192 5.4l.708-.708l3.1 3.1l3.1-3.1l.708.708z");
}
</style><path class="w5873umpg"/>`,
		"fallback": "material-symbols-light:unfold-less-sharp",
	});
}

export default Component;
