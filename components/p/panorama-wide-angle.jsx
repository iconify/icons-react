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
		"content": `<style>.p22-6pk_c {
  fill: currentColor;
  d: path("M7.732 18.788q-2.032-.213-3.924-.672q-.43-1.495-.618-3.02Q3 13.568 3 12t.19-3.095t.618-3.02q1.84-.443 3.863-.664T12 5t4.329.221t3.863.664q.43 1.494.619 3.02T21 12t-.192 3.095t-.616 3.02q-1.892.46-3.924.673T12 19t-4.268-.213");
}
</style><path class="p22-6pk_c"/>`,
		"fallback": "material-symbols-light:panorama-wide-angle",
	});
}

export default Component;
