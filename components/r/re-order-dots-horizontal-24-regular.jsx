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
		"content": `<style>.n23sc8cvg {
  fill: currentColor;
  d: path("M7 15.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="n23sc8cvg"/>`,
		"fallback": "fluent:re-order-dots-horizontal-24-regular",
	});
}

export default Component;
