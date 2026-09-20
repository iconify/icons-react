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
		"content": `<style>.csrq8wbcn {
  fill: currentColor;
  d: path("M8.95 20L2.7 21.3L4 15.05zm0 0L4 15.05L16.875 2.175l4.95 4.95zm-.3-2.525L19 7.125L16.875 5L6.525 15.35z");
}
</style><path class="csrq8wbcn"/>`,
		"fallback": "material-symbols:stylus-outline-sharp",
	});
}

export default Component;
