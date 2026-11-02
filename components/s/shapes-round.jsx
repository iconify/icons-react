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
		"content": `<style>.k2cm1absq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm10 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0M9.248 5.872l1.197 1.796c.665.997-.05 2.332-1.248 2.332H6.803C5.605 10 4.89 8.665 5.555 7.668l1.197-1.796a1.5 1.5 0 0 1 2.496 0");
}
</style><path class="k2cm1absq"/>`,
		"fallback": "coolicons:shapes-round",
	});
}

export default Component;
