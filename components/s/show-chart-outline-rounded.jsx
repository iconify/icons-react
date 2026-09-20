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
		"content": `<style>.ujns21bnh {
  fill: currentColor;
  d: path("M2.425 17q0-.425.325-.75l5.325-5.325q.575-.575 1.425-.575t1.425.575L13.5 13.5l6.4-7.225q.275-.325.713-.325t.737.3q.275.275.288.662t-.263.688L14.9 14.9q-.575.65-1.425.688T12 15l-2.5-2.5l-5.25 5.25q-.325.325-.75.325t-.75-.325t-.325-.75");
}
</style><path class="ujns21bnh"/>`,
		"fallback": "material-symbols:show-chart-outline-rounded",
	});
}

export default Component;
