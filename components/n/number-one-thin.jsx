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
		"content": `<style>.ua6rdg9cm {
  fill: currentColor;
  d: path("M140 48v160a4 4 0 0 1-8 0V55.06L98.06 75.43a4 4 0 0 1-4.12-6.86l40-24A4 4 0 0 1 140 48");
}
</style><path class="ua6rdg9cm"/>`,
		"fallback": "ph:number-one-thin",
	});
}

export default Component;
