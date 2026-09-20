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
		"content": `<style>.fmd58fbrq {
  fill: currentColor;
  d: path("M7 21q-.95 0-1.787-.425T3.8 19.4t-.75-1.687t.1-1.838l.6-2.05L3 3.15L5 3q1.65-.125 2.888.975t1.362 2.75L9.475 9.7q.125 1.65-.962 2.9t-2.738 1.375l-.7 2.45q-.125.45-.038.925t.363.85q.125.15.275.275t.35.25q.125-1.575 1.263-2.65T10 15h7q1.65 0 2.825 1.175T21 19v2z");
}
</style><path class="fmd58fbrq"/>`,
		"fallback": "material-symbols:tatami-seat-sharp",
	});
}

export default Component;
