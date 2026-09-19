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
		"content": `<style>.f0rv2qb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.712 4.344L13.5 25.674l11.06-.262l-7.346 17.932L34.5 20.657l-11.883.294Z");
}
</style><path class="f0rv2qb9x"/>`,
		"fallback": "arcticons:plugsurfing",
	});
}

export default Component;
