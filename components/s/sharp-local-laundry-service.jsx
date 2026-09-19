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
		"content": `<style>.x6za-q1rn {
  fill: currentColor;
  d: path("M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0s1.56-4.1 0-5.66zM20 2.01L4 2v20h16zM10 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M7 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6");
}
</style><path class="x6za-q1rn"/>`,
		"fallback": "ic:sharp-local-laundry-service",
	});
}

export default Component;
