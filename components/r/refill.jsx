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
		"content": `<style>.lha7k0b6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.017 4.479c-1.042 8.421-13.405 16.365-13.405 26.16c0 9.197 7.704 12.84 14.214 12.84s12.483-6.27 12.483-14.453s-8.01-18.515-13.292-24.547");
}
</style><path class="lha7k0b6q"/>`,
		"fallback": "arcticons:refill",
	});
}

export default Component;
