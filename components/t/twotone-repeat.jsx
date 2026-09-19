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
		"content": `<style>.i_f_n2lxv {
  fill: currentColor;
  d: path("M7 22v-3h12v-6h-2v4H7v-3l-4 4zM21 6l-4-4v3H5v6h2V7h10v3z");
}
</style><path class="i_f_n2lxv"/>`,
		"fallback": "ic:twotone-repeat",
	});
}

export default Component;
