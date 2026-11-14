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
		"content": `<style>.luq36e3zk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.875 2.75h10.25q2.123 0 3.624 1.501t1.501 3.624v8.25q0 2.123-1.501 3.624t-3.624 1.501H6.875q-2.123 0-3.624-1.501T1.75 16.125v-8.25q0-2.123 1.501-3.624T6.875 2.75M17 5.5H7Q4.5 5.5 4.5 8v3q0 1.036.732 1.768T7 13.5h10q1.036 0 1.768-.732T19.5 11V8q0-2.5-2.5-2.5m-7 11.25q0 2 2 2t2-2t-2-2t-2 2");
}
</style><path class="luq36e3zk"/>`,
		"fallback": "uix-solid:meter-digital-display",
	});
}

export default Component;
