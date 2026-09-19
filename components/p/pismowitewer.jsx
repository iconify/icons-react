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
		"content": `<style>.fq-4e8bpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.4 6.45v35.1a1.95 1.95 0 0 0 1.95 1.95h2.376v-39H10.35A1.95 1.95 0 0 0 8.4 6.45m4.326-1.95v39H37.65a1.95 1.95 0 0 0 1.95-1.95V6.45a1.95 1.95 0 0 0-1.95-1.95Zm13.437 23.626v-17m-5 5.192h10");
}
</style><path class="fq-4e8bpt"/>`,
		"fallback": "arcticons:pismowitewer",
	});
}

export default Component;
