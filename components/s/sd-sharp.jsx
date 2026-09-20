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
		"content": `<style>.g9rzbib-x {
  fill: currentColor;
  d: path("M3 19V5h18v14zm3.616-4.308H11v-3.076H7.5v-1.424h2.616v.5H11V9.308H6.616v3.077h3.5v1.423H7.5v-.5h-.885zm6.384 0h3.789l.595-.615V9.904l-.596-.596H13zm.885-.884v-3.616H16.5v3.616z");
}
</style><path class="g9rzbib-x"/>`,
		"fallback": "material-symbols-light:sd-sharp",
	});
}

export default Component;
