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
		"content": `<style>.pvuv6mfzl {
  fill: currentColor;
  d: path("M3 21V3h18v18zm13.25-4.75Q18 14.5 18 12t-1.75-4.25T12 6T7.75 7.75T6 12t1.75 4.25T12 18t4.25-1.75");
}
</style><path class="pvuv6mfzl"/>`,
		"fallback": "material-symbols:vignette-2-sharp",
	});
}

export default Component;
