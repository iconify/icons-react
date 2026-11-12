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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r0xhknb7f {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.wkaiixt9t {
  d: path("M18.2178 18.2173L22.0004 22");
}
</style><g class="ipq1z-bjh"><circle class="r0xhknb7f"/><path class="wkaiixt9t"/></g>`,
		"fallback": "solar:magnifier-line-duotone",
	});
}

export default Component;
