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
		"content": `<style>.cx6j4tbgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.641c-10.201 0-18.5-8.298-18.5-18.5v-9.92h8.816v9.92c0 5.34 4.344 9.684 9.684 9.684s9.684-4.343 9.684-9.684v-9.92H42.5v9.92c0 10.202-8.299 18.5-18.5 18.5");
}

.ze6syimrf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.777 23.081V5.359H42.5z");
}
</style><path class="cx6j4tbgg"/><path class="ze6syimrf"/>`,
		"fallback": "arcticons:upside",
	});
}

export default Component;
