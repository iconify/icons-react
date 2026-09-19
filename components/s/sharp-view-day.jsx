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
		"content": `<style>.t3rq_2x_q {
  fill: currentColor;
  d: path("M2 21h19v-3H2zM21 8H2v8h19zM2 3v3h19V3z");
}
</style><path class="t3rq_2x_q"/>`,
		"fallback": "ic:sharp-view-day",
	});
}

export default Component;
