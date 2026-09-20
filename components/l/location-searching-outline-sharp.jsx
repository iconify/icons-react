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
		"content": `<style>.ds9hzob8g {
  fill: currentColor;
  d: path("M11 23v-2q-3.125-.35-5.363-2.588T3.05 13.05h-2v-2h2q.35-3.125 2.588-5.363T11 3.1v-2h2v2q3.125.35 5.363 2.588t2.587 5.362h2v2h-2q-.35 3.125-2.587 5.363T13 21v2zm5.95-6Q19 14.95 19 12.05T16.95 7.1T12 5.05T7.05 7.1T5 12.05T7.05 17T12 19.05T16.95 17");
}
</style><path class="ds9hzob8g"/>`,
		"fallback": "material-symbols:location-searching-outline-sharp",
	});
}

export default Component;
