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
		"content": `<style>.olyo0z-sd {
  fill: currentColor;
  d: path("M6 2h12a3 3 0 0 1 3 3v16a1 1 0 0 1-1.447.894L16 20.118l-3.553 1.776a1 1 0 0 1-.894 0L8 20.118l-3.553 1.776A1 1 0 0 1 3 21V5a3 3 0 0 1 3-3m7 6a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2Z");
}
</style><path class="olyo0z-sd"/>`,
		"fallback": "coolicons:receipt-plus-fill",
	});
}

export default Component;
