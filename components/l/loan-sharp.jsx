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
		"content": `<style>.arhzj7pfi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.25v7.5m3-6.5h2.5l2.1-1.1l.443-.245l.507-.005h3.95v3H11.5m-5.75 4.35h6.6l1.037-.005l.813-.645l5.6-4.4l1.099-1.014l-1.85-2.35l-1.099 1.014l-3.2 2.5m-7-12.6h12V10h-12z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.w5yxhp1xq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.75 6.38h.01");
}
</style><g class="ux2u0rbkq"><path class="arhzj7pfi"/><path class="w5yxhp1xq"/></g>`,
		"fallback": "iconoven:loan-sharp",
	});
}

export default Component;
