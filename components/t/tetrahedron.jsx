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
		"content": `<style>.yfd_xbbyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.72 3.77l7.81 10.96q.72 1.02-.29 1.76l-5.48 4.02q-1.01.74-2.16.24L3.9 17q-1.15-.5-.45-1.54L11.3 3.79q.7-1.04 1.42-.02m-.42 2.48l1.45 15");
}
</style><path class="yfd_xbbyp"/>`,
		"fallback": "iconoven:tetrahedron",
	});
}

export default Component;
