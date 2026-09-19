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
		"content": `<style>.r1g7mcbwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 29.63l-9.75 5.63l-9.75-5.63V18.37l29.25 16.89l9.75-5.63V18.37l-9.75-5.63L24 18.37l19.5 11.26l-29.25-16.89l-9.75 5.63");
}
</style><path class="r1g7mcbwt"/>`,
		"fallback": "arcticons:telebox",
	});
}

export default Component;
