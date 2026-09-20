import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ccbx0el9e {
  fill: currentColor;
  d: path("M17.215 11.318c1.047-.567 1.047-2.07 0-2.638L5.216 2.18A1.5 1.5 0 0 0 3.002 3.5v12.999a1.5 1.5 0 0 0 2.214 1.319zm-.476-1.758a.5.5 0 0 1 0 .879l-11.999 6.5a.5.5 0 0 1-.738-.44v-13a.5.5 0 0 1 .738-.439z");
}
</style><path class="ccbx0el9e"/>`,
		"fallback": "fluent:triangle-right-20-regular",
	});
}

export default Component;
