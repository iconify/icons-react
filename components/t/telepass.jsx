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
		"content": `<style>.ajc0ail3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.226 22.684l-9.536-9.045c-1.23-1.168-3.263-.58-3.68 1.064L4.572 32.2c-.488 1.925 1.602 3.473 3.301 2.446l13.974-8.45a2.22 2.22 0 0 0 .378-3.511m-5.405-5.129v11.722m-6.281 3.754V13.128m16.071 2.611H43.5M31.096 33.625l3.959-17.886");
}
</style><path class="ajc0ail3o"/>`,
		"fallback": "arcticons:telepass",
	});
}

export default Component;
