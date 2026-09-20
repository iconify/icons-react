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
		"content": `<style>.tbjjx3kjj {
  fill: currentColor;
  d: path("M10.5 17.5h3V15H16v-3h-2.5V9.5h-3V12H8v3h2.5zM5 21V6h14v15zm2-2h10V8H7zM6 5V3h12v2zm1 3v11z");
}
</style><path class="tbjjx3kjj"/>`,
		"fallback": "material-symbols:medication-outline-sharp",
	});
}

export default Component;
