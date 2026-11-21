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
		"content": `<style>.l2c24ubgr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 13.2413L8.1314 16.2413L2 12.7413L5 9.7413L12 6.2413L15.5449 2L22 5.2413L19 9.7413L19 18.618L12 22L5 18.618L5 14.4538M5 9.7413L12 13.2413L19 9.7413M12 13.2413L12 22M12 6.2413L19 9.7413");
}
</style><path class="l2c24ubgr"/>`,
		"fallback": "keyline-icons:package-open-sharp",
	});
}

export default Component;
