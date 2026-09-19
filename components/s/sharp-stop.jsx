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
		"content": `<style>.ki1f0pvph {
  fill: currentColor;
  d: path("M6 6h12v12H6z");
}
</style><path class="ki1f0pvph"/>`,
		"fallback": "ic:sharp-stop",
	});
}

export default Component;
