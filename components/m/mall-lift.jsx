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
		"content": `<style>.wm012j5be {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.875 1.75h4.25q2.123 0 3.624 1.501t1.501 3.624v10.25q0 2.123-1.501 3.624t-3.624 1.501h-4.25q-2.123 0-3.624-1.501T4.75 17.125V6.875q0-2.123 1.501-3.624T9.875 1.75m2.125 2q-4 0-4 4t4 4t4-4q0-1.657-1.172-2.828Q13.657 3.75 12 3.75m-4 12.5q0 4 4 4t4-4q0-1.657-1.172-2.828Q13.657 12.25 12 12.25q-4 0-4 4");
}
</style><path class="wm012j5be"/>`,
		"fallback": "uix-solid:mall-lift",
	});
}

export default Component;
