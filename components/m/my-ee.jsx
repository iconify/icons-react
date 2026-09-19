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
		"content": `<style>.g3z6a510a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.66 32.467h3.051m1.629 4.68h-4.68v-9.36h4.68m-4.68-12.254h3.051m1.629 4.68h-4.68v-9.36h4.68");
}

.rnzd8imao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.07 24a11 11 0 0 0 3.963-8.467C35.033 9.44 30.093 4.5 24 4.5S12.967 9.44 12.967 15.533c0 3.403 1.542 6.443 3.964 8.467a11 11 0 0 0-3.964 8.467C12.967 38.56 17.907 43.5 24 43.5s11.033-4.94 11.033-11.033A11.01 11.01 0 0 0 31.069 24");
}
</style><path class="rnzd8imao"/><path class="g3z6a510a"/>`,
		"fallback": "arcticons:my-ee",
	});
}

export default Component;
