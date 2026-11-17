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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.m31-ydk1f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 10h11v11H3Z");
}

.nr0mibcgq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6V3h3m12 0h3v3m0 12v3h-3M10 3h4m7 7v4M3 10h11v11H3Z");
}
</style><g class="ft5dv1b6b"><path class="m31-ydk1f"/><path class="nr0mibcgq"/></g>`,
		"fallback": "coolicons:square-dashed-square-duotone-sharp",
	});
}

export default Component;
