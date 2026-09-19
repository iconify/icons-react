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
		"content": `<style>.ha34mzi1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20 11L7 16l11 6m12-11l11 5l-13 6m-2-12l-6 28");
}
</style><path class="ha34mzi1c"/>`,
		"fallback": "arcticons:pocket-editor",
	});
}

export default Component;
