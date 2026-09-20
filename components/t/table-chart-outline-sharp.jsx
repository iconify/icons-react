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
		"content": `<style>.jlftzkbos {
  fill: currentColor;
  d: path("M3 21V3h18v18zM5 8h14V5H5zm0 11h2.5v-9H5zm11.5 0H19v-9h-2.5zm-7 0h5v-9h-5z");
}
</style><path class="jlftzkbos"/>`,
		"fallback": "material-symbols:table-chart-outline-sharp",
	});
}

export default Component;
