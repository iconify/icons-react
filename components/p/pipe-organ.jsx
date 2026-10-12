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
		"content": `<style>.ncqemj29w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 10h4.5q.75 0 .75.75v6.5q0 .75-.51 1.3L6.51 20.7q-.51.55-1.02 0l-1.98-2.15Q3 18 3 17.25v-6.5q0-.75.75-.75m12-3.5h4.5q.75 0 .75.75v10q0 .75-.51 1.3l-1.98 2.15q-.51.55-1.02 0l-1.98-2.15Q15 18 15 17.25v-10q0-.75.75-.75m-6-3.75h4.5q.75 0 .75.75v13.75q0 .75-.51 1.3l-1.98 2.15q-.51.55-1.02 0l-1.98-2.15Q9 18 9 17.25V3.5q0-.75.75-.75m-5 12.75h2.5m3.5 0h2.5m3.5 0h2.5");
}
</style><path class="ncqemj29w"/>`,
		"fallback": "iconoven:pipe-organ",
	});
}

export default Component;
