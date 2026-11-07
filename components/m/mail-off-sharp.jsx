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
		"content": `<style>.cu9cmiisa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19H3V5h2m6 0h10v10m-2 4h-7m4-9l5-5M2 2l20 20");
}
</style><path class="cu9cmiisa"/>`,
		"fallback": "coolicons:mail-off-sharp",
	});
}

export default Component;
