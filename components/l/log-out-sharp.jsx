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
		"content": `<style>.nkzmvt3le {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 17v4H3V3h11v4m4 8l3-3m0 0l-3-3m3 3H11");
}
</style><path class="nkzmvt3le"/>`,
		"fallback": "coolicons:log-out-sharp",
	});
}

export default Component;
