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
		"content": `<style>.rl7uijs9g {
  fill: currentColor;
  d: path("M3 8V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5Zm5-3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm3.01 0H11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M3 10h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm5 5a4 4 0 1 0 8 0a4 4 0 0 0-8 0m2 0a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 15");
}
</style><path class="rl7uijs9g"/>`,
		"fallback": "coolicons:washing-machine-fill-sharp",
	});
}

export default Component;
