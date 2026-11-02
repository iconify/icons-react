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
		"content": `<style>.e8z1uobpo {
  fill: currentColor;
  d: path("M7 16a5 5 0 0 1-5-5V7a3 3 0 0 1 3-3h6a11 11 0 0 1 8.8 4.4l.325.43c.465.615.945 1.231 1.305 1.915c.366.696.57 1.468.57 2.255c0 .797-.314 1.558-.879 2.121A3 3 0 0 1 19 16ZM5 6a1 1 0 0 0-1 1v1h4V6Zm5 2h6.657A9 9 0 0 0 11 6h-1Zm11 10a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="e8z1uobpo"/>`,
		"fallback": "coolicons:train-side-fill-round",
	});
}

export default Component;
