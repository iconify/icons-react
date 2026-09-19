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
		"content": `<style>.n4dnnzrwg {
  fill: currentColor;
  d: path("M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z");
}
</style><path class="n4dnnzrwg"/>`,
		"fallback": "ic:outline-arrow-outward",
	});
}

export default Component;
