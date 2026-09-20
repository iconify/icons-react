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
		"content": `<style>.dcbsd6bgy {
  fill: currentColor;
  d: path("m249.87 119.06l-40-80A19.89 19.89 0 0 0 192 28H64a19.89 19.89 0 0 0-17.87 11.06l-40 80A20 20 0 0 0 24 148h92v56H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-56h92a20 20 0 0 0 17.89-28.94ZM30.49 124l36-72h123l36 72ZM192 100a12 12 0 0 1-12 12H76a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12");
}
</style><path class="dcbsd6bgy"/>`,
		"fallback": "ph:lectern-bold",
	});
}

export default Component;
