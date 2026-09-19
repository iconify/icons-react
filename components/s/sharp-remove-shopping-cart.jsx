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
		"content": `<style>.rsg8mbbie {
  fill: currentColor;
  d: path("M1.41 1.13L0 2.54l4.39 4.39l2.21 4.66L3.62 17h10.84l1.38 1.38A1.997 1.997 0 0 0 17 22c.67 0 1.26-.33 1.62-.84L21.46 24l1.41-1.41zM7 15l1.1-2h2.36l2 2zm9.05-2.06h.73L21.7 4H7.12zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2");
}
</style><path class="rsg8mbbie"/>`,
		"fallback": "ic:sharp-remove-shopping-cart",
	});
}

export default Component;
