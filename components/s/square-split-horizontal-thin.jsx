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
		"content": `<style>.d4h73_bxi {
  fill: currentColor;
  d: path("M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M52 200V56a4 4 0 0 1 4-4h68v152H56a4 4 0 0 1-4-4m152 0a4 4 0 0 1-4 4h-68V52h68a4 4 0 0 1 4 4Z");
}
</style><path class="d4h73_bxi"/>`,
		"fallback": "ph:square-split-horizontal-thin",
	});
}

export default Component;
