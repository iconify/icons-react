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
		"content": `<style>.rfs5b2ouv {
  fill: currentColor;
  d: path("M13 9h5l-5-5zM6 22q-.825 0-1.412-.587T4 20v-3h16v3q0 .825-.587 1.413T18 22zm-5-7v-2h22v2zm3-4V4q0-.825.588-1.412T6 2h8l6 6v3z");
}
</style><path class="rfs5b2ouv"/>`,
		"fallback": "material-symbols:scan",
	});
}

export default Component;
