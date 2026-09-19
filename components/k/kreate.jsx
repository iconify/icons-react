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
		"content": `<style>.i0vwi3mgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.415 41.276c0 1.624-1.207 2.162-2.414 1.074L16.889 25.129c-.626-.565-.626-1.693 0-2.258L36 5.65c1.207-1.088 2.414-.55 2.414 1.074zM9.585 4.5v39");
}
</style><path class="i0vwi3mgu"/>`,
		"fallback": "arcticons:kreate",
	});
}

export default Component;
