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
		"content": `<style>.ajzue-b6c {
  fill: currentColor;
  d: path("M1 21v-9h2V7.725H2V3h9v4.725h-1V12h4V7.725h-1V3h9v4.725h-1V12h2v9zM15 6h5V5h-5zM4 6h5V5H4zm12 6h3V8h-3zM5 12h3V8H5zm-2 7h18v-5H3zM4 6V5zm11 0V5zM3 19v-5z");
}
</style><path class="ajzue-b6c"/>`,
		"fallback": "material-symbols:lab-panel-outline-sharp",
	});
}

export default Component;
