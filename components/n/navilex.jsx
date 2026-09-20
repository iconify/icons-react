import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ce-93d5zo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 40.021L24 7.978L11.545 40.021l16.352-25.294M16.366 40.021l13.75-21.45l-8.197 21.45l9.973-18.375m-5.784 18.375l7.869-14.763l-5.214 14.763m1.883 0l6.04-10.069m1.917 3.32l-4.026 6.75m7.923-.001h-3.873l1.936-3.354");
}
</style><path class="ce-93d5zo"/>`,
		"fallback": "arcticons:navilex",
	});
}

export default Component;
