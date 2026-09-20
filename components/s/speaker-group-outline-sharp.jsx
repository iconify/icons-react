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
		"content": `<style>.g1-nanbli {
  fill: currentColor;
  d: path("M10 17h9V3h-9zm-2 2V1h13v18zm6.5-11.5q.625 0 1.063-.437T16 6t-.437-1.062T14.5 4.5t-1.062.438T13 6t.438 1.063T14.5 7.5m0 8.5q1.45 0 2.475-1.025T18 12.5t-1.025-2.475T14.5 9t-2.475 1.025T11 12.5t1.025 2.475T14.5 16m0-2q-.625 0-1.062-.437T13 12.5t.438-1.062T14.5 11t1.063.438T16 12.5t-.437 1.063T14.5 14m1.5 9H4V5h2v16h10zM10 3v14z");
}
</style><path class="g1-nanbli"/>`,
		"fallback": "material-symbols:speaker-group-outline-sharp",
	});
}

export default Component;
