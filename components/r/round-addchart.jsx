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
		"content": `<style>.hjlss7y5l {
  fill: currentColor;
  d: path("M11 10c0-.55.45-1 1-1s1 .45 1 1v7h-2zm9 3c-.55 0-1 .45-1 1v5H5V5h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1m1-8h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1m-5 8c-.55 0-1 .45-1 1v3h2v-3c0-.55-.45-1-1-1m-9-1v5h2v-5c0-.55-.45-1-1-1s-1 .45-1 1");
}
</style><path class="hjlss7y5l"/>`,
		"fallback": "ic:round-addchart",
	});
}

export default Component;
