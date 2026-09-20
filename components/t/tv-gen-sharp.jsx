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
		"content": `<style>.rnwchjbdm {
  fill: currentColor;
  d: path("M4 21v-2H2V4h20v15h-2v2h-1l-.65-2H5.675L5 21z");
}
</style><path class="rnwchjbdm"/>`,
		"fallback": "material-symbols:tv-gen-sharp",
	});
}

export default Component;
