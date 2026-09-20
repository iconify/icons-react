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
		"content": `<style>.ksfpu9yqp {
  fill: currentColor;
  d: path("m9 21l-1.425-1.4l1.6-1.6H9q-2.925 0-4.962-2.037T2 11t2.038-4.962T9 4h6q2.925 0 4.963 2.038T22 11t-2.037 4.963T15 18v-2q2.075 0 3.538-1.463T20 11t-1.463-3.537T15 6H9Q6.925 6 5.463 7.463T4 11t1.463 3.563T9 16.2h.4l-1.8-1.8L9 13l4 4z");
}
</style><path class="ksfpu9yqp"/>`,
		"fallback": "material-symbols:laps-outline-sharp",
	});
}

export default Component;
