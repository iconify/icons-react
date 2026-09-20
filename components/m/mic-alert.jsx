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
		"content": `<style>.k46_bdlbk {
  fill: currentColor;
  d: path("M7.875 13.125Q7 12.25 7 11V5q0-1.25.875-2.125T10 2t2.125.875T13 5v6q0 1.25-.875 2.125T10 14t-2.125-.875M11 21H9v-3.075q-2.6-.35-4.3-2.325T3 11h2q0 2.075 1.463 3.538T10 16q.275 0 .513-.025T11 15.9zm6-1q.2 0 .35-.15t.15-.35t-.15-.35T17 19t-.35.15t-.15.35t.15.35t.35.15m-.5-2h1v-4h-1zm-3.037 2.538Q12 19.075 12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463");
}
</style><path class="k46_bdlbk"/>`,
		"fallback": "material-symbols:mic-alert",
	});
}

export default Component;
