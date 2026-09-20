import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tgvb_lmst {
  fill: currentColor;
  d: path("M10 6a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 10 6m0 5.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m-1.25 4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0");
}
</style><path class="tgvb_lmst"/>`,
		"fallback": "fluent:more-vertical-20-regular",
	});
}

export default Component;
