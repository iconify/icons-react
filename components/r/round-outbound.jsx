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
		"content": `<style>.oc7gbbc0g {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1.88 9.54l-4.25 4.25a.996.996 0 1 1-1.41-1.41l4.25-4.25l-1.27-1.27a.503.503 0 0 1 .35-.86h3.94c.28 0 .5.22.5.5v3.94c0 .45-.54.67-.85.35z");
}
</style><path class="oc7gbbc0g"/>`,
		"fallback": "ic:round-outbound",
	});
}

export default Component;
