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
		"content": `<style>.e3sz77t9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.91 20.12l-15-15a2 2 0 0 0-1.41-.59h-12a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-20a2 2 0 0 0-.59-1.41m-9.02-14.6l8.59 8.59a.6.6 0 0 0 1-.42V6.5a2 2 0 0 0-2-2h-7.17a.6.6 0 0 0-.42 1.02");
}
</style><path class="e3sz77t9x"/>`,
		"fallback": "arcticons:libreofficeviewer",
	});
}

export default Component;
