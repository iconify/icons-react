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
		"content": `<style>.xijq9nyap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.862 41.676L43.5 11.618L31.232 6.324l-8.681 3.448l3.56 8.965l5.504-2.186l-3.778 12.471l-11.306-6.48l5.504-2.186l-3.56-8.965l-8.682 3.448L4.5 27.107z");
}
</style><path class="xijq9nyap"/>`,
		"fallback": "arcticons:obtainium",
	});
}

export default Component;
