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
		"content": `<style>.nnhdqmt5c {
  fill: currentColor;
  d: path("M20.496 11.132a.999.999 0 0 1 0 1.736l-14 8A1 1 0 0 1 5 20V4a1 1 0 0 1 1.496-.868Z");
}
</style><path class="nnhdqmt5c"/>`,
		"fallback": "coolicons:play-fill-sharp",
	});
}

export default Component;
