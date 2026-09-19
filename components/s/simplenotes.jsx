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
		"content": `<style>.e-38-ifve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2Zm-11-11l11 11M13.96 15h8.7m-8.7 22.02h5.63M13.96 20.5h17.37m-17.37 5.51h17.37m-17.37 5.51h17.37");
}
</style><path class="e-38-ifve"/>`,
		"fallback": "arcticons:simplenotes",
	});
}

export default Component;
