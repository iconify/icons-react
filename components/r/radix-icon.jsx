import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":393};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ky6pv2ppl {
  d: path("M119.467 392.533C53.487 392.533 0 335.227 0 264.533c0-70.693 53.487-128 119.467-128zm0-392.533H0v119.467h119.467zm76.8 119.467c32.99 0 59.733-26.744 59.733-59.734S229.257 0 196.267 0s-59.734 26.743-59.734 59.733s26.744 59.734 59.734 59.734");
}
</style><path class="ky6pv2ppl"/>`,
		"fallback": "logos:radix-icon",
	});
}

export default Component;
