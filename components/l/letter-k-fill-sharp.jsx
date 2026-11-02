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
		"content": `<style>.wwo7y5b1s {
  fill: currentColor;
  d: path("M8 11h.586l7.707-7.707a.999.999 0 1 1 1.414 1.414L10.414 12l7.293 7.293a.999.999 0 1 1-1.414 1.414L8.586 13H8v7a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0Z");
}
</style><path class="wwo7y5b1s"/>`,
		"fallback": "coolicons:letter-k-fill-sharp",
	});
}

export default Component;
