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
		"content": `<style>.a8j65pyeg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 6l1-2h12l2 4v12H4V8zM4 8h16M9 13a2 2 0 1 0 4 0a2 2 0 0 0-4 0m4 2l2 2");
}

.ft5dv1b6b {
  fill: none;
}

.ypziembin {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 4h12l2 4H4Z");
}
</style><g class="ft5dv1b6b"><path class="ypziembin"/><path class="a8j65pyeg"/></g>`,
		"fallback": "coolicons:package-search-duotone-sharp",
	});
}

export default Component;
