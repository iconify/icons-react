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
		"content": `<style>.i2-_kab0m {
  fill: currentColor;
  d: path("M7 2h10v7.85q0 .575-.25 1.025t-.7.725l-3.55 2.1l.7 2.3H17l-3.1 2.2l1.2 3.8l-3.1-2.35L8.9 22l1.2-3.8L7 16h3.8l.7-2.3l-3.55-2.1q-.45-.275-.7-.725T7 9.85zm2 2v5.85l2 1.2V4zm6 0h-2v7.05l2-1.2zm-2 3.525");
}
</style><path class="i2-_kab0m"/>`,
		"fallback": "material-symbols:military-tech-outline",
	});
}

export default Component;
