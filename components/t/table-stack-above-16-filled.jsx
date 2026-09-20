import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x8yodpbdv {
  fill: currentColor;
  d: path("M2.5 2a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM11 6h2.5a.5.5 0 0 1 .5.5V10h-3zm-1 0H6v4h4zm-8 4V6.5a.5.5 0 0 1 .5-.5H5v4zm3 1H2v.5A2.5 2.5 0 0 0 4.5 14H5zm1 3h4v-3H6zm5.5 0H11v-3h3v.5a2.5 2.5 0 0 1-2.5 2.5");
}
</style><path class="x8yodpbdv"/>`,
		"fallback": "fluent:table-stack-above-16-filled",
	});
}

export default Component;
