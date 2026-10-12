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
		"content": `<style>.eemhipsnm {
  d: path("M12 10.25v7m-2.5-2.5l2.5 2.5l2.5-2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xb_mjgbku {
  d: path("M12 2.75c3.75 4.25 6.25 8 6.25 12.25a6.25 6.25 0 0 1-12.5 0c0-4.25 2.5-8 6.25-12.25Z");
}
</style><g class="x2cwu0gfd"><path class="xb_mjgbku"/><path class="eemhipsnm"/></g>`,
		"fallback": "iconoven:water-save-sharp",
	});
}

export default Component;
