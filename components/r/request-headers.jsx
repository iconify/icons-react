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
		"content": `<style>.jwy_igigo {
  d: path("M11.6 21.5H3.5v-19H18v10.2");
}

.ncysxgfob {
  d: path("M7 12.5h7.5m-7.5 4h4.5M15 21l5.25-5.25m-4-.25h4.25v4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x774g__7g {
  fill: currentColor;
  d: path("M6.5 5.5H15v3H6.5Z");
}
</style><g class="ulnmmdpxh"><path class="jwy_igigo"/><path class="x774g__7g"/><path class="ncysxgfob"/></g>`,
		"fallback": "uix-sharp:request-headers",
	});
}

export default Component;
