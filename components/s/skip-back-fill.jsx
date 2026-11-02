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
		"content": `<style>.cde73hblb {
  fill: currentColor;
  d: path("M16.41 4.456A2.999 2.999 0 0 1 21 7v10a3 3 0 0 1-4.59 2.544l-8-5a3 3 0 0 1 0-5.088ZM5 19a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><path class="cde73hblb"/>`,
		"fallback": "coolicons:skip-back-fill",
	});
}

export default Component;
