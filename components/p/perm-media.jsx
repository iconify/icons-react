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
		"content": `<style>.zcihvsbnx {
  fill: currentColor;
  d: path("M3.616 19.77q-.672 0-1.144-.473Q2 18.825 2 18.154V7.077h1v11.077q0 .269.173.442t.443.173H19v1zm3-3q-.672 0-1.144-.473Q5 15.825 5 15.154V4.616q0-.672.472-1.144T6.616 3h4.961l2 2h6.808q.67 0 1.143.472q.472.472.472 1.144v8.538q0 .671-.472 1.143t-1.144.472zM9.46 13h8.693l-2.758-3.654l-2.454 3.077l-1.588-1.884z");
}
</style><path class="zcihvsbnx"/>`,
		"fallback": "material-symbols-light:perm-media",
	});
}

export default Component;
