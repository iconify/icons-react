import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pmo7cdbgc {
  fill: currentColor;
  d: path("m8.7 16.7l-1.4-1.4l4.3-4.3H8V9h7v7h-2v-3.6zM19 12V5h-7V3h9v9zM5 21q-.825 0-1.412-.587T3 19V3h2v16h16v2z");
}
</style><path class="pmo7cdbgc"/>`,
		"fallback": "material-symbols:ungroup",
	});
}

export default Component;
