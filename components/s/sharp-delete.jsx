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
		"content": `<style>.cxiwfu_6h {
  fill: currentColor;
  d: path("M6 21h12V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z");
}
</style><path class="cxiwfu_6h"/>`,
		"fallback": "ic:sharp-delete",
	});
}

export default Component;
