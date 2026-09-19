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
		"content": `<style>.vzubpablo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8 17.5l32-13m-32 39l32-13m-32 0l32-13m-13.854-13H8m32 39H21.854");
}
</style><path class="vzubpablo"/>`,
		"fallback": "arcticons:tosca",
	});
}

export default Component;
