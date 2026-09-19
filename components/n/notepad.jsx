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
		"content": `<style>.lpl2uzbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.06 7.45S6.14 30.77 4.5 40.55h39l-6.59-33v0Zm3.11 6.41h21.66m-22.86 6.66h24.06m-25.31 6.74h26.56M9.6 34.19h28.8");
}
</style><path class="lpl2uzbau"/>`,
		"fallback": "arcticons:notepad",
	});
}

export default Component;
