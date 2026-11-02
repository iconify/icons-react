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
		"content": `<style>.caz71cbkh {
  fill: currentColor;
  d: path("M19.12 8.608a4 4 0 0 1 0 6.784l-8 5A4.001 4.001 0 0 1 5 17V7a4 4 0 0 1 6.12-3.392Z");
}
</style><path class="caz71cbkh"/>`,
		"fallback": "coolicons:play-fill-round",
	});
}

export default Component;
