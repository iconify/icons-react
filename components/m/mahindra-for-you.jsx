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
		"content": `<style>.e8-o9yb8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.723 38.588l3.453.12L24 32.061v-5.416L5.5 9.292zm20.554 0l-3.453.12L24 32.061v-5.416L42.5 9.292z");
}
</style><path class="e8-o9yb8n"/>`,
		"fallback": "arcticons:mahindra-for-you",
	});
}

export default Component;
