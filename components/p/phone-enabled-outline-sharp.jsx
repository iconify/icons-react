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
		"content": `<style>.ydojulnhl {
  fill: currentColor;
  d: path("M4.05 21H3v-5.875L8 14.1l2.9 2.9q1-.575 1.863-1.237t1.587-1.388q.775-.75 1.45-1.625t1.225-1.85l-2.85-2.875L15.1 3H21v1.05q0 3.15-1.35 6.2T15.8 15.8t-5.562 3.85T4.05 21M17.975 9q.375-.9.625-1.888T18.975 5H16.75l-.425 2.35zm-8.95 8.95L7.35 16.275L5 16.75v2.2q1-.075 2.013-.325t2.012-.675m0 0");
}
</style><path class="ydojulnhl"/>`,
		"fallback": "material-symbols:phone-enabled-outline-sharp",
	});
}

export default Component;
