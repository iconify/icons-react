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
		"content": `<style>.kdp-zedij {
  fill: currentColor;
  d: path("m18 6.83l1.59 1.58L21 7l-4-4l-4 4l1.41 1.41L16 6.83V13H6v8h2v-6h10z");
}
</style><path class="kdp-zedij"/>`,
		"fallback": "ic:sharp-turn-sharp-right",
	});
}

export default Component;
