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
		"content": `<style>.t0hmtsbfa {
  fill: currentColor;
  d: path("M14.539 21.02q-2.752-1.162-4.376-3.614t-1.624-5.429q0-2.39 1.102-4.495Q10.742 5.377 12.7 4H8.462V3h6.077v6.077h-1V4.589q-1.887 1.217-2.944 3.17t-1.057 4.199q0 2.569 1.35 4.707t3.65 3.256z");
}
</style><path class="t0hmtsbfa"/>`,
		"fallback": "material-symbols-light:switch-access-shortcut",
	});
}

export default Component;
