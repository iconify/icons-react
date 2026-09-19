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
		"content": `<style>.p5t1l7g6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.295v2.846h3.558V35.86H5.5v2.846h37V35.86h-3.558V12.141H42.5V9.295zm9.724 2.846h5.693v23.718h-5.693zm11.86 0h5.692v23.718h-5.693z");
}
</style><path class="p5t1l7g6f"/>`,
		"fallback": "arcticons:minna-bank",
	});
}

export default Component;
