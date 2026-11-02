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
		"content": `<style>.uqzrcfbyd {
  fill: currentColor;
  d: path("M12.707 3.707L9.414 7l3.293 3.293a.999.999 0 1 1-1.414 1.414L8 8.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414L6.586 7L3.293 3.707a.999.999 0 1 1 1.414-1.414L8 5.586l3.293-3.293a.999.999 0 1 1 1.414 1.414m8 14L18.414 20H20a1 1 0 0 1 0 2h-4a1.002 1.002 0 0 1-.707-1.707l3.646-3.646A1.002 1.002 0 0 0 17 17a1 1 0 0 1-2 0a3.001 3.001 0 0 1 6 0c0 .265-.105.52-.293.707");
}
</style><path class="uqzrcfbyd"/>`,
		"fallback": "coolicons:subscript-fill",
	});
}

export default Component;
