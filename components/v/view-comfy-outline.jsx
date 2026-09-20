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
		"content": `<style>.fj-zf_bna {
  fill: currentColor;
  d: path("M2 20V4h20v16zm18-9V6H4v5zm-10 7h10v-5H10zm-6 0h4v-5H4z");
}
</style><path class="fj-zf_bna"/>`,
		"fallback": "material-symbols:view-comfy-outline",
	});
}

export default Component;
