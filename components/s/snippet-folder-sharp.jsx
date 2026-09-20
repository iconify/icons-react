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
		"content": `<style>.yahghvq-v {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm11.192-3.192v-5.616h1.818l1.798 1.799v3.817zm-.884.884h5.384v-5.057l-2.326-2.327h-3.058z");
}
</style><path class="yahghvq-v"/>`,
		"fallback": "material-symbols-light:snippet-folder-sharp",
	});
}

export default Component;
