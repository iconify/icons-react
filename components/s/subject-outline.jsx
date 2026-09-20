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
		"content": `<style>.re8qaebdw {
  fill: currentColor;
  d: path("M4 19v-2h10v2zm0-4v-2h16v2zm0-4V9h16v2zm0-4V5h16v2z");
}
</style><path class="re8qaebdw"/>`,
		"fallback": "material-symbols:subject-outline",
	});
}

export default Component;
