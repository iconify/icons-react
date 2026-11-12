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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p9nk_hb0c {
  d: path("M8 20H4V4h16v4");
}

.t00g54bkw {
  stroke-opacity: 0.4;
  d: path("M15 13h4v3l2 2h-8l2-2zm-1 0h6m-3 5v3");
}
</style><g class="nrj6p8qat"><path class="t00g54bkw"/><path class="p9nk_hb0c"/></g>`,
		"fallback": "coolicons:note-pin-corner-duocolor-sharp",
	});
}

export default Component;
