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
		"content": `<style>.dku-ycbtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m10 0h.01m-2.06 4.95h.01M12 19h.01m-4.96-2.05h.01M5 12h.01m2.04-4.95h.01M12 5h.01m4.94 2.05h.01");
}
</style><path class="dku-ycbtv"/>`,
		"fallback": "coolicons:sun-dim-sharp",
	});
}

export default Component;
