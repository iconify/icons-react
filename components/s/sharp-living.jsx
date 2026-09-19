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
		"content": `<style>.m9p8z1fnd {
  fill: currentColor;
  d: path("M22 2H2v20h20zm-3 7.99V18H5v-8l1.25-.01V6h11.5v3.99z");
}

.ucbjwo4kf {
  fill: currentColor;
  d: path("M10 10v3h4v-3l2.25-.01V7.5h-8.5v2.49z");
}

.xb8i9xbzg {
  fill: currentColor;
  d: path("M15.5 12v2.5h-7V12h-2v4.5h11V12z");
}
</style><path class="xb8i9xbzg"/><path class="ucbjwo4kf"/><path class="m9p8z1fnd"/>`,
		"fallback": "ic:sharp-living",
	});
}

export default Component;
