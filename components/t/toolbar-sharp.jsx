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
		"content": `<style>.n9avs0ujt {
  fill: currentColor;
  d: path("M4 8V4h16v4zm0 12V9h16v11z");
}
</style><path class="n9avs0ujt"/>`,
		"fallback": "material-symbols-light:toolbar-sharp",
	});
}

export default Component;
