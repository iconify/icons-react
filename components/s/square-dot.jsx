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
		"content": `<style>.m_glu1bsz {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm7-3q-1.65 0-2.825-1.175T8 12t1.175-2.825T12 8t2.825 1.175T16 12t-1.175 2.825T12 16");
}
</style><path class="m_glu1bsz"/>`,
		"fallback": "material-symbols:square-dot",
	});
}

export default Component;
