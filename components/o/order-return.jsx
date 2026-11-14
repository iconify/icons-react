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
		"content": `<style>.gsw2hh7wb {
  d: path("m3.5 7l8.5 4.5L20.5 7M12 11.5v2.75M15 17h4a2 2 0 0 1 0 4h-1.5");
}

.tdbz56bir {
  d: path("M16.5 15.5L15 17l1.5 1.5");
}

.tkb58bblb {
  d: path("M12 2.5L20.5 7v5.25H14a2 2 0 0 0-2 2v7.25L3.5 17V7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tkb58bblb"/><path class="gsw2hh7wb"/><path class="tdbz56bir"/></g>`,
		"fallback": "uix-sharp:order-return",
	});
}

export default Component;
