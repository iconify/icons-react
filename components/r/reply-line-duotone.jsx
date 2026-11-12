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
		"content": `<style>.ctaf6od0q {
  d: path("M4.5 12H14.5C16.1667 12 19.5 13 19.5 17");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u3awk2cum {
  stroke-linejoin: round;
  d: path("M9.5 7L4.5 12L9.5 17");
}
</style><g class="ipq1z-bjh"><path class="u3awk2cum"/><path class="ctaf6od0q"/></g>`,
		"fallback": "solar:reply-line-duotone",
	});
}

export default Component;
