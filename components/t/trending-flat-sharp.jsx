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
		"content": `<style>.y54jv0b_u {
  fill: currentColor;
  d: path("m17.192 15.808l-.713-.708l2.6-2.6H4v-1h15.079l-2.594-2.6l.713-.708L21 12z");
}
</style><path class="y54jv0b_u"/>`,
		"fallback": "material-symbols-light:trending-flat-sharp",
	});
}

export default Component;
