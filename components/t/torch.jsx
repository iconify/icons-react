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
		"content": `<style>.bim826b4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 6.23l4.47 4.47h6.33v6.33L39.27 24l-4.47 4.47v6.33h-6.33L24 39.27l-4.47-4.47H13.2v-6.33L8.73 24l4.47-4.47V13.2h6.33Zm0 9.69A5.58 5.58 0 0 0 18.42 24A5.58 5.58 0 0 0 24 29.58A5.58 5.58 0 0 0 29.58 24A5.58 5.58 0 0 0 24 18.42");
}
</style><path class="bim826b4i"/>`,
		"fallback": "arcticons:torch",
	});
}

export default Component;
