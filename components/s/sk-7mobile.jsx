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
		"content": `<style>.svte6bb6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.643 17.133H10.786L5.501 7.978L42.5 7.98L24 40.022l-5.286-9.155z");
}
</style><path class="svte6bb6c"/>`,
		"fallback": "arcticons:sk-7mobile",
	});
}

export default Component;
