import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.knrdeta-g {
  fill: currentColor;
  d: path("M5.533 4h12.934q.945 0 1.401.808t-.002 1.615l-6.468 11.173q-.46.808-1.398.808t-1.398-.808L4.135 6.423q-.46-.807-.003-1.615T5.532 4m-.518 1.923L6.508 8.5h10.984l1.495-2.577q.173-.308.01-.615Q18.832 5 18.466 5H5.533q-.366 0-.53.308q-.162.308.01.615M7.088 9.5l2.302 4h5.223l2.301-4zm2.88 5l1.494 2.577q.174.307.539.307t.539-.307l1.494-2.577z");
}
</style><path class="knrdeta-g"/>`,
		"fallback": "material-symbols-light:tornado-outline-rounded",
	});
}

export default Component;
