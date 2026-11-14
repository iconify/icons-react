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
		"content": `<style>.jt7gc06ql {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M5.5 12q0-2.692 1.904-4.596T12 5.5t4.596 1.904T18.5 12t-1.904 4.596T12 18.5t-4.596-1.904T5.5 12");
}
</style><path class="jt7gc06ql"/>`,
		"fallback": "uix-solid:record-circle",
	});
}

export default Component;
