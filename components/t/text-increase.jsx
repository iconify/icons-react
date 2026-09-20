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
		"content": `<style>.qqmbmgufy {
  fill: currentColor;
  d: path("m1.616 18.5l5.288-13h.962l5.288 13h-1.208l-1.448-3.633H4.194L2.746 18.5zm2.938-4.6h5.584l-2.71-6.8h-.132zm13.83 1.6v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="qqmbmgufy"/>`,
		"fallback": "material-symbols-light:text-increase",
	});
}

export default Component;
