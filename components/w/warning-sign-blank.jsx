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
		"content": `<style>.ovixjvzyc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.966 6.892l5.088 9.373q.915 1.687-.066 3.336t-2.9 1.649H6.912q-1.919 0-2.9-1.649t-.066-3.336l5.088-9.373Q9.992 5.127 12 5.127t2.966 1.765");
}
</style><path class="ovixjvzyc"/>`,
		"fallback": "uix-solid:warning-sign-blank",
	});
}

export default Component;
