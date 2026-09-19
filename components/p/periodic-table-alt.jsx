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
		"content": `<style>.ujh7qlb-p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M4.5 9v21h3v-6h3v6h33V9h-3v3h-10v6h-20v-6h-3V9zm6 24v6h27v-6z");
}
</style><path class="ujh7qlb-p"/>`,
		"fallback": "arcticons:periodic-table-alt",
	});
}

export default Component;
