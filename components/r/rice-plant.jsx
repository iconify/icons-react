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
		"content": `<style>.lvaltwbsz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21.25V12c0-3.5 1.5-6.5 4.25-8.5C17 3.75 19 6.25 19.5 10.25");
}

.oij1--bku {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.5 7h.01m1.99 3.25h.01m2.24 3.25h.01");
}

.x922nlbme {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 18.5c-.75-2.25-2.75-4-6.25-5m6.25 2c.5-1.25 1.5-2.25 3.25-3");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="lvaltwbsz"/><path class="x922nlbme"/><path class="oij1--bku"/></g>`,
		"fallback": "iconoven:rice-plant",
	});
}

export default Component;
