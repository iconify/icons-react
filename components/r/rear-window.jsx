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
		"content": `<style>.gcui2yj9s {
  d: path("M7.25 13.25a5.5 5.5 0 0 1 9.5 0M12 16h.01");
}

.kb-b5_0wk {
  d: path("M6.5 5h11L21 19H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kb-b5_0wk"/><path class="gcui2yj9s"/></g>`,
		"fallback": "uix-sharp:rear-window",
	});
}

export default Component;
