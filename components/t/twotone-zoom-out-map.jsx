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
		"content": `<style>.wr432gbdf {
  fill: currentColor;
  d: path("m17.3 5.3l-2.89 2.87l1.42 1.42L18.7 6.7L21 9V3h-6zM9 3H3v6l2.3-2.3l2.87 2.89l1.42-1.42L6.7 5.3zm-.83 11.41L5.3 17.3L3 15v6h6l-2.3-2.3l2.89-2.87zm7.66 0l-1.42 1.42l2.89 2.87L15 21h6v-6l-2.3 2.3z");
}
</style><path class="wr432gbdf"/>`,
		"fallback": "ic:twotone-zoom-out-map",
	});
}

export default Component;
