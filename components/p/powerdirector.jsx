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
		"content": `<style>.bjil9ubwj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.514 35.107H4.5V12.893h30.014m-30.014 0l30.014 22.214m0-22.214L4.5 35.107");
}

.r5vdmu33y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.692 24l7.822 5.358V18.643zM43.5 34.733V13.267m-4.493 17.659V17.074");
}
</style><path class="bjil9ubwj"/><path class="r5vdmu33y"/>`,
		"fallback": "arcticons:powerdirector",
	});
}

export default Component;
