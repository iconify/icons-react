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
		"content": `<style>.c_cq2lbig {
  fill: currentColor;
  d: path("M2 7.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5");
}
</style><path class="c_cq2lbig"/>`,
		"fallback": "fluent:line-horizontal-1-16-regular",
	});
}

export default Component;
