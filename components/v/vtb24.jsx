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
		"content": `<style>.rdlbq-bix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.907 20.549H6.592M42.5 8.599H15.736C11.088 12.825 7.284 16.769 5.5 24c1.784 7.231 5.588 11.175 10.236 15.401H42.5c0-5.588-8.593-13.523-8.593-13.523H11.604m27.515-11.304H9.994");
}
</style><path class="rdlbq-bix"/>`,
		"fallback": "arcticons:vtb24",
	});
}

export default Component;
