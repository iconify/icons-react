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
		"content": `<style>.dmxzzbb6p {
  d: path("M12 21.5v-7m-2-2h4v2h-4Zm-5 9h14");
}

.sgls5rb0c {
  d: path("M12 12.5c2-9 8-9 9.5 2.5M12 12.5c-2-9-8-9-9.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dmxzzbb6p"/><path class="sgls5rb0c"/></g>`,
		"fallback": "uix-sharp:sprinkler-spray-arc",
	});
}

export default Component;
