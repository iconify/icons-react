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
		"content": `<style>.ezuom-15v {
  fill: currentColor;
  d: path("M165.27 21.22a12 12 0 0 0-12.64 1.31L83.88 76H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h43.88l68.75 53.47A12 12 0 0 0 172 224V32a12 12 0 0 0-6.73-10.78M148 199.46l-52.63-40.93A12 12 0 0 0 88 156H44v-56h44a12 12 0 0 0 7.37-2.53L148 56.54Z");
}
</style><path class="ezuom-15v"/>`,
		"fallback": "ph:speaker-simple-none-bold",
	});
}

export default Component;
