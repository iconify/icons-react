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
		"content": `<style>.umy8kdbsc {
  fill: currentColor;
  d: path("M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98z");
}
</style><path class="umy8kdbsc"/>`,
		"fallback": "ic:near-me",
	});
}

export default Component;
