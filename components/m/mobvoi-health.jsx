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
		"content": `<style>.vc5lvacqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.272 42.5a6.99 6.99 0 0 0 6.992-6.992h0V24.567a6.99 6.99 0 0 0-6.992-6.984H13.331a6.99 6.99 0 0 0-6.988 6.984a6.99 6.99 0 0 0 6.988 6.996h3.942V35.5a6.99 6.99 0 0 0 6.988 6.995h.011zm6.992-12.083h3.401c3.86 0 6.99-3.128 6.992-6.988a6.99 6.99 0 0 0-6.992-6.991h-3.938v-3.946A6.99 6.99 0 0 0 23.735 5.5h-.003h0a6.99 6.99 0 0 0-6.992 6.992v5.09");
}
</style><path class="vc5lvacqp"/>`,
		"fallback": "arcticons:mobvoi-health",
	});
}

export default Component;
