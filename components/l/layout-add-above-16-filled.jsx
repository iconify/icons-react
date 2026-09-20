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
		"content": `<style>.op2xt-ivf {
  fill: currentColor;
  d: path("M13.5 6a.5.5 0 0 1 .5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-5a.5.5 0 0 1 .5-.5zm0-4a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1z");
}
</style><path class="op2xt-ivf"/>`,
		"fallback": "fluent:layout-add-above-16-filled",
	});
}

export default Component;
