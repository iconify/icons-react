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
		"content": `<style>.ixul04bmd {
  fill: currentColor;
  d: path("M4 18h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4zm6 2H2V4h20z");
}
</style><path class="ixul04bmd"/>`,
		"fallback": "material-symbols:view-week-outline-sharp",
	});
}

export default Component;
