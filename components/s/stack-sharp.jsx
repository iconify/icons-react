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
		"content": `<style>.bvg529bcs {
  fill: currentColor;
  d: path("M6.616 14v1H3V3h12v3.616h-1V4H4v10zM9 21V9h12v12z");
}
</style><path class="bvg529bcs"/>`,
		"fallback": "material-symbols-light:stack-sharp",
	});
}

export default Component;
