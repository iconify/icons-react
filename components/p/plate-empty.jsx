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
		"content": `<style>.wga2-fbxk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M5.75 12q0-2.589 1.831-4.419Q9.411 5.75 12 5.75t4.419 1.831T18.25 12t-1.831 4.419Q14.589 18.25 12 18.25t-4.419-1.831Q5.75 14.589 5.75 12");
}
</style><path class="wga2-fbxk"/>`,
		"fallback": "uix-solid:plate-empty",
	});
}

export default Component;
