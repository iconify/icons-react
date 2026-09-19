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
		"content": `<style>.jvz7jqb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.172 16.338L32.835 24l-7.663 7.663");
}

.ty11r03br {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.834 24H3.672m2.344 4.87v3.88a4 4 0 0 0 2 3.465l15.156 8.75a4 4 0 0 0 4 0l15.156-8.75a4 4 0 0 0 2-3.465v-17.5a4 4 0 0 0-2-3.465l-15.156-8.75a4 4 0 0 0-4 0h0l-15.156 8.75a4 4 0 0 0-2 3.465v3.88");
}
</style><path class="ty11r03br"/><path class="jvz7jqb7x"/>`,
		"fallback": "arcticons:lectio-365",
	});
}

export default Component;
