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
		"content": `<style>.xdj9f9utq {
  fill: currentColor;
  d: path("M2 18V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2.382l4.553-2.276A1 1 0 0 1 22 7v10a1 1 0 0 1-1.447.894L16 15.618V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m14-4.618l4 2V8.618l-4 2Z");
}
</style><path class="xdj9f9utq"/>`,
		"fallback": "coolicons:video-fill-sharp",
	});
}

export default Component;
