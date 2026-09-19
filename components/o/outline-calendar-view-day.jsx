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
		"content": `<style>.i2grdbctc {
  fill: currentColor;
  d: path("M3 17h18v2H3zm16-5v1H5v-1zm2-2H3v5h18zM3 6h18v2H3z");
}
</style><path class="i2grdbctc"/>`,
		"fallback": "ic:outline-calendar-view-day",
	});
}

export default Component;
