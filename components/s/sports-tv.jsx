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
		"content": `<style>.e_pp5abkg {
  d: path("M2.5 4h19v13.5h-19ZM7 17.5l-1.5 3m11.5-3l1.5 3M12 4v13.5");
}

.n7fy89bnu {
  d: path("M9.25 10.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e_pp5abkg"/><path class="n7fy89bnu"/></g>`,
		"fallback": "uix-sharp:sports-tv",
	});
}

export default Component;
