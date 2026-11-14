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
		"content": `<style>.vy5kskb2r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 1.75H6.875q-2.123 0-3.624 1.501T1.75 6.875v10.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624V6.875q0-2.123-1.501-3.624T17.125 1.75M8.5 6q2.092 0 2.433 1.75h2.134Q13.408 6 15.5 6Q18 6 18 8.5q0 2.092-1.75 2.433v2.134Q18 13.408 18 15.5q0 2.5-2.5 2.5q-2.092 0-2.433-1.75h-2.134Q10.592 18 8.5 18Q6 18 6 15.5q0-2.092 1.75-2.433v-2.134Q6 10.592 6 8.5Q6 6 8.5 6m2.433 8.75h2.134q.275-1.408 1.683-1.683v-2.134q-1.408-.275-1.683-1.683h-2.134q-.275 1.408-1.683 1.683v2.134q1.408.275 1.683 1.683");
}
</style><path class="vy5kskb2r"/>`,
		"fallback": "uix-solid:materials-science",
	});
}

export default Component;
