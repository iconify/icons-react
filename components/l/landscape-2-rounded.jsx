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
		"content": `<style>.db6t-6bdu {
  fill: currentColor;
  d: path("M2.75 20q-.575 0-.85-.475t-.025-.975L4.6 13.1q.25-.5.713-.8T6.35 12q.6 0 1.1.312t.725.888l.675 1.65q.05.15.225.137t.225-.162l2.15-7.175q.35-1.2 1.338-1.925T15.025 5q1.225 0 2.188.712t1.337 1.863l3.875 11.1q.175.5-.137.913t-.813.412zM6 10q-1.25 0-2.125-.888T3 7q0-1.25.875-2.125T6 4t2.125.875T9 7q0 1.225-.875 2.113T6 10");
}
</style><path class="db6t-6bdu"/>`,
		"fallback": "material-symbols:landscape-2-rounded",
	});
}

export default Component;
