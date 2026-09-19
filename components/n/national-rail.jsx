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
		"content": `<style>.a-9-hyb6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 20.468h39m-39 7.064h39M16.757 13.403l14.486 7.065l-14.486 7.065l14.486 7.065");
}
</style><path class="a-9-hyb6h"/>`,
		"fallback": "arcticons:national-rail",
	});
}

export default Component;
