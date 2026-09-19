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
		"content": `<style>.xep23pbiq {
  fill: currentColor;
  d: path("M5 1v22h14V1zm12 18H7V5h10z");
}
</style><path class="xep23pbiq"/>`,
		"fallback": "ic:sharp-smartphone",
	});
}

export default Component;
