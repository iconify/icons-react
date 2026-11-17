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
		"content": `<style>.bhwog2b5s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 21a9 9 0 0 1-9-9a9 9 0 0 1 9-9a9 9 0 0 1 9 9a9 9 0 0 1-9 9");
}

.ft5dv1b6b {
  fill: none;
}

.quuy5mjkw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m7 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-4 0a6 6 0 0 1 6-6m6 6a6 6 0 0 1-6 6");
}
</style><g class="ft5dv1b6b"><path class="bhwog2b5s"/><path class="quuy5mjkw"/></g>`,
		"fallback": "coolicons:vinyl-duotone-sharp",
	});
}

export default Component;
