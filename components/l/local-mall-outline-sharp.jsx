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
		"content": `<style>.gm4n9gblc {
  fill: currentColor;
  d: path("M4 21V7h4q0-1.671 1.165-2.835Q10.329 3 12 3t2.836 1.165T16 7h4v14zm1-1h14V8H5zm9.836-8.164Q16 10.67 16 9h-1q0 1.25-.875 2.125T12 12t-2.125-.875T9 9H8q0 1.671 1.165 2.836Q10.329 13 12 13t2.836-1.164M9 7h6q0-1.25-.875-2.125T12 4t-2.125.875T9 7M5 20V8z");
}
</style><path class="gm4n9gblc"/>`,
		"fallback": "material-symbols-light:local-mall-outline-sharp",
	});
}

export default Component;
