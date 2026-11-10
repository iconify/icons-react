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
		"content": `<style>.eukmd2ctf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.9 9.725l-20 28.55H18l6-14.6l6 14.6h11.1l-20-28.55");
}
</style><path class="eukmd2ctf"/>`,
		"fallback": "arcticons:tents",
	});
}

export default Component;
