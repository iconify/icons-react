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
		"content": `<style>.kn99cquyp {
  fill: currentColor;
  d: path("M2 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v5h14V6a2 2 0 0 0-2-2z");
}
</style><path class="kn99cquyp"/>`,
		"fallback": "fluent:panel-bottom-20-filled",
	});
}

export default Component;
