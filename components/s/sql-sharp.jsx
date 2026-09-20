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
		"content": `<style>.ttcey-bvx {
  fill: currentColor;
  d: path("M3 15v-2h1.5v.5h2v-1H3V9h5v2H6.5v-.5h-2v1H8V15zm8.75 1.5V15H10V9h5v6h-1.75v1.5zm-.25-3h2v-3h-2zM17 15V9h1.5v4.5H21V15z");
}
</style><path class="ttcey-bvx"/>`,
		"fallback": "material-symbols:sql-sharp",
	});
}

export default Component;
