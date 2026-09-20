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
		"content": `<style>.zkuq_cbiq {
  fill: currentColor;
  d: path("M20 18V6h2v12zm-8 0l-1.425-1.4l3.6-3.6H2v-2h12.175L10.6 7.4L12 6l6 6z");
}
</style><path class="zkuq_cbiq"/>`,
		"fallback": "material-symbols:keyboard-tab",
	});
}

export default Component;
