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
		"content": `<style>.i4w8zbcnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.645 20.23L24 31.364L16.356 20.23M24 42.5V31.365m-7.212 0h14.424m-14.424 5.567h14.424");
}

.tdq-1rbyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.674 6.003l-15.5 13.729A2 2 0 0 0 6.5 21.23V40.5a2 2 0 0 0 2 2h31a2 2 0 0 0 2-2V21.23a2 2 0 0 0-.674-1.498l-15.5-13.73a2 2 0 0 0-2.652 0ZM41.5 15.328V7A1.5 1.5 0 0 0 40 5.5h-4.5A1.5 1.5 0 0 0 34 7v1.685");
}
</style><path class="tdq-1rbyp"/><path class="i4w8zbcnr"/>`,
		"fallback": "arcticons:rakuten-budget-book",
	});
}

export default Component;
