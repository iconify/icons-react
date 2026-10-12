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
		"content": `<style>.k9pk4ac0w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.25 17h.01");
}

.rkrb1wo2f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.75 20.25l8-8m5-9.5q.54 3.96 4.5 4.5q-3.96.54-4.5 4.5q-.54-3.96-4.5-4.5q3.96-.54 4.5-4.5Zm-10.25 2v3.5M4.75 6.5h3.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="rkrb1wo2f"/><path class="k9pk4ac0w"/></g>`,
		"fallback": "iconoven:magic-wand-sharp",
	});
}

export default Component;
