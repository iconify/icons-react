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
		"content": `<style>.me4q4rtzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.41 9.94A1.09 1.09 0 0 1 43.5 11v26a1.1 1.1 0 1 1-2.19 0V11a1.1 1.1 0 0 1 1.1-1.06M9.25 19.22A4.75 4.75 0 1 1 4.5 24a4.75 4.75 0 0 1 4.75-4.78m12.08 0A4.75 4.75 0 1 1 16.58 24a4.75 4.75 0 0 1 4.75-4.78m12.08 0A4.75 4.75 0 1 1 28.65 24a4.75 4.75 0 0 1 4.76-4.78");
}
</style><path class="me4q4rtzy"/>`,
		"fallback": "arcticons:lastpass",
	});
}

export default Component;
