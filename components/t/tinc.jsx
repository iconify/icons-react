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
		"content": `<style>.vztspcb8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.06 4.5l7.55 7.55l-7.55 7.55v-5.66H13.94v8.17h-3.78V10.16h23.9Zm0 21.39h3.78v12h-23.9v5.61L6.39 36l7.55-7.55v5.65h20.12Z");
}
</style><path class="vztspcb8f"/>`,
		"fallback": "arcticons:tinc",
	});
}

export default Component;
