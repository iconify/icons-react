import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hwoyigs9g {
  fill: currentColor;
  d: path("M15 3H7.5A4.5 4.5 0 0 0 3 7.5V15h12zM3 24.5V17h12v12H7.5A4.5 4.5 0 0 1 3 24.5M17 29V17h12v7.5a4.5 4.5 0 0 1-4.5 4.5zM29 7.5V15H17V3h7.5A4.5 4.5 0 0 1 29 7.5m-2.543 14.457a1 1 0 0 0-1.414-1.414L22 23.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z");
}
</style><path class="hwoyigs9g"/>`,
		"fallback": "fluent:table-simple-checkmark-32-filled",
	});
}

export default Component;
