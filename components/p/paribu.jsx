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
		"content": `<style>.skcr2nqlu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.902 43.5v-39m-6.482 0h17.62c5.3 0 9.54 4.24 9.54 9.539s-4.24 9.539-9.54 9.539H10.42");
}
</style><path class="skcr2nqlu"/>`,
		"fallback": "arcticons:paribu",
	});
}

export default Component;
