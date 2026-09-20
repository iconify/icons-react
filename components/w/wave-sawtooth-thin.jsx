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
		"content": `<style>.ted-gmb0r {
  fill: currentColor;
  d: path("m234.1 131.41l-104 64a4 4 0 0 1-2.1.59a4 4 0 0 1-4-4V71.16l-97.9 60.25a4 4 0 0 1-4.2-6.82l104-64A4 4 0 0 1 132 64v120.84l97.9-60.25a4 4 0 1 1 4.2 6.82");
}
</style><path class="ted-gmb0r"/>`,
		"fallback": "ph:wave-sawtooth-thin",
	});
}

export default Component;
