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
		"content": `<style>.pycbi7pqw {
  fill: currentColor;
  d: path("M13 9h5l-5-5zM4 22v-5h16v5zm-3-7v-2h22v2zm3-4V2h10l6 6v3z");
}
</style><path class="pycbi7pqw"/>`,
		"fallback": "material-symbols:scan-sharp",
	});
}

export default Component;
