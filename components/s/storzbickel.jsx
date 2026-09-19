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
		"content": `<style>.e-0yrmrat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.94 26.91H20.2l-6 16.31a21.64 21.64 0 0 1 0-38.44l6 16.31h7.62l6-16.31a21.64 21.64 0 0 1 0 38.44Z");
}
</style><path class="e-0yrmrat"/>`,
		"fallback": "arcticons:storzbickel",
	});
}

export default Component;
