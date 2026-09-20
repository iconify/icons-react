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
		"content": `<style>.m6-xnebam {
  fill: currentColor;
  d: path("M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M56 54h144a2 2 0 0 1 2 2v66H54V56a2 2 0 0 1 2-2m144 148H56a2 2 0 0 1-2-2v-66h148v66a2 2 0 0 1-2 2");
}
</style><path class="m6-xnebam"/>`,
		"fallback": "ph:square-split-vertical-light",
	});
}

export default Component;
