import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wi-7vobcu {
  fill: currentColor;
  d: path("m240.49 63.51l-48-48a12 12 0 0 0-17 17L191 48l-23 23l-31.51-31.49a12 12 0 1 0-17 17L123 60l-81.14 81.17A19.86 19.86 0 0 0 36 155.31V203l-20.49 20.51a12 12 0 0 0 17 17L53 220h47.72a19.86 19.86 0 0 0 14.14-5.86L196 133l3.51 3.52a12 12 0 0 0 17-17L185 88l23-23l15.51 15.52a12 12 0 1 0 17-17ZM99 196H60v-39l14-14l17.51 17.52a12 12 0 0 0 17-17L91 126l11-11l17.51 17.52a12 12 0 0 0 17-17L119 98l21-21l39 39Z");
}
</style><path class="wi-7vobcu"/>`,
		"fallback": "ph:syringe-bold",
	});
}

export default Component;
