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
		"content": `<style>.ags7yvj6m {
  fill: currentColor;
  d: path("M10 22v-4.1l8.775-8.725l4.05 4.075L14.1 22zm8.725-7.45L20 13.25L18.775 12l-1.3 1.3zm-7.975-5.3l-1.4-1.425L11.175 6h-3.35q-.225.65-.7 1.125T6 7.825v8.35q.875.325 1.438 1.088T8 19q0 1.25-.875 2.125T5 22t-2.125-.875T2 19q0-.975.563-1.725T4 16.2V7.825Q3.125 7.5 2.563 6.737T2 5q0-1.25.875-2.125T5 2q.975 0 1.738.563T7.825 4h3.35L9.35 2.175L10.75.75L15 5zm10.375-6.375Q22 3.75 22 5t-.875 2.125T19 8t-2.125-.875T16 5t.875-2.125T19 2t2.125.875");
}
</style><path class="ags7yvj6m"/>`,
		"fallback": "material-symbols:rebase-edit-sharp",
	});
}

export default Component;
