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
		"content": `<style>.xkhkkx8gr {
  fill: currentColor;
  d: path("M11 2h2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m-.842 4.221a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558m0 5a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558M10 17a2 2 0 1 0 3.999.001A2 2 0 0 0 10 17");
}
</style><path class="xkhkkx8gr"/>`,
		"fallback": "coolicons:traffic-light-fill-round",
	});
}

export default Component;
