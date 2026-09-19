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
		"content": `<style>.v3r2f85gp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.503 42.5v-37h21.8c13.55 1.59 12.608 20.268 2.592 21.917L40.497 42.5h-17.44c3.606-1.485 5.28-4.96 3.771-7.66l-5.774-10.604L15.28 34.84c-1.45 2.78.402 6.139 3.771 7.659z");
}
</style><path class="v3r2f85gp"/>`,
		"fallback": "arcticons:respirelax",
	});
}

export default Component;
