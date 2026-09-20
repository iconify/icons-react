import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ktd4nsb4o {
  fill: currentColor;
  d: path("M230 40a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h168a6 6 0 0 1 6 6m-48 32a6 6 0 0 0-6-6H32a6 6 0 0 0 0 12h144a6 6 0 0 0 6-6m-16 32a6 6 0 0 0-6-6H56a6 6 0 0 0 0 12h104a6 6 0 0 0 6-6m16 32a6 6 0 0 0-6-6H88a6 6 0 0 0 0 12h88a6 6 0 0 0 6-6m2 26h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-24 32h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m-32 32h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12");
}
</style><path class="ktd4nsb4o"/>`,
		"fallback": "ph:tornado-light",
	});
}

export default Component;
