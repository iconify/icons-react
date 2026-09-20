import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xuoydwbam {
  fill: currentColor;
  d: path("M13.93 3.362c.31-.81-.484-1.604-1.293-1.293L2.64 5.915c-.906.348-.834 1.653.105 1.9l4.024 1.06a.5.5 0 0 1 .357.356l1.059 4.024c.247.94 1.552 1.01 1.9.105zm-.934-.36l-3.845 9.999l-1.06-4.025a1.5 1.5 0 0 0-1.068-1.069L2.998 6.848z");
}
</style><path class="xuoydwbam"/>`,
		"fallback": "fluent:location-arrow-16-regular",
	});
}

export default Component;
