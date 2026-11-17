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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.nclrs4bft {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 3h3v3L10 17l-3-3Z");
}

.x48gtebgo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 14L18 3h3v3L10 17m-5-5l7 7m-4-3l-4 4m-1-1l2 2");
}
</style><g class="ft5dv1b6b"><path class="nclrs4bft"/><path class="x48gtebgo"/></g>`,
		"fallback": "coolicons:sword-duotone-sharp",
	});
}

export default Component;
