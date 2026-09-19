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
		"content": `<style>.o_qplz6qv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.574 43.5h23.344l7.654-19.477L31.96 4.5H8.428l7.966 19.523zm7.82-19.477h23.179");
}
</style><path class="o_qplz6qv"/>`,
		"fallback": "arcticons:philstocks",
	});
}

export default Component;
