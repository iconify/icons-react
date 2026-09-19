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
		"content": `<style>.i1cv7w5zz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.373 13.769l-7.63 9.797l3.819 10.64");
}

.j7cturlfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.835 27.312l2.484 6.917M4.5 34.23l4.167-20.437h15.316l3.499 9.75m-11.027.87H6.576m12.635 9.818L35.13 13.792m-8.205 15.98l-3.462 4.46m4.771-20.439l1.097 3.056M39.69 34.23l-3.82-10.64l7.63-9.797");
}
</style><path class="j7cturlfb"/><path class="i1cv7w5zz"/>`,
		"fallback": "arcticons:krungthai-smartfx",
	});
}

export default Component;
