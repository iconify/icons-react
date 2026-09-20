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
		"content": `<style>.l7ib4nbxj {
  fill: currentColor;
  d: path("M2 20V4h20v7h-2V6h-7v5h-2V6H4v12h7v2zm12 2v-4.25h2V20h4v-2.25h2V22zm-1.2-4l1-5h8.4l1 5zm2.425-2h5.55l-.2-1h-5.15zM5 16h5v-2H5zm0-3h5v-2H5zm0-3h5V8H5zm9 0V8h5v2zM4 18V6z");
}
</style><path class="l7ib4nbxj"/>`,
		"fallback": "material-symbols:two-pager-store-outline-sharp",
	});
}

export default Component;
