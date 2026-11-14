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
		"content": `<style>.ib4qn4bwp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 3.75H6.875q-2.123 0-3.624 1.501T1.75 8.875v6.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624v-6.25q0-2.123-1.501-3.624T17.125 3.75M8.641 8.141Q10.032 6.75 12 6.75t3.359 1.391q1.143 1.143 1.347 2.675q1.544.32 1.544 2.184v.5q0 2.25-2.25 2.25t-2.25-2.25V13q0-1.814 1.462-2.165Q14.898 8.25 12 8.25t-3.212 2.585q1.462.351 1.462 2.165v.5q0 2.25-2.25 2.25T5.75 13.5V13q0-1.864 1.544-2.184q.204-1.532 1.347-2.675");
}
</style><path class="ib4qn4bwp"/>`,
		"fallback": "uix-solid:radio-station",
	});
}

export default Component;
