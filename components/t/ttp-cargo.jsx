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
		"content": `<style>.deab-0dzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.626 34.025c2.8-.857 6.245-1.69 7.43-4.772c1.482-3.859-12.538-12.718-27.268-18.615M38.342 31.4l-2.087-4.282c1.877.196 4.857 2.15 4.755 4.439c-2.075-.152-4.333-.275-5.272 1.857");
}

.v86o4wbbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.118 34.29l13.83-.763c7.175-.396 6.34 1.236 6.368 4.368c1.908-2.214 1.36-6.114-.573-8.112C32.974 20.713 18.838 14.37 4.5 10.105c9.855 4.972 20.152 10.257 25.311 16.206c3.295 3.8-1.947 5.824-7.693 7.98");
}
</style><path class="v86o4wbbc"/><path class="deab-0dzs"/>`,
		"fallback": "arcticons:ttp-cargo",
	});
}

export default Component;
