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
		"content": `<style>.bcr7bgbkq {
  fill: currentColor;
  d: path("M2 20V4h20v16zm11-2h7V6h-7zm-8-2h5v-2H5zm0-3h5v-2H5zm0-3h5V8H5zm9 6h5v-2h-5zm0-3h5v-2h-5zm0-3h5V8h-5z");
}
</style><path class="bcr7bgbkq"/>`,
		"fallback": "material-symbols:two-pager-sharp",
	});
}

export default Component;
