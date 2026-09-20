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
		"content": `<style>.o6frw66jc {
  fill: currentColor;
  d: path("M3.05 12L7 8V3h10v5l4 4zM2 20v-6h20v6zm8-3.3h4v-1.5h-4z");
}
</style><path class="o6frw66jc"/>`,
		"fallback": "material-symbols:range-hood-sharp",
	});
}

export default Component;
