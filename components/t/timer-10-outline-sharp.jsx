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
		"content": `<style>.v2zu31-zx {
  fill: currentColor;
  d: path("M14 16h3V8h-3zm-3 3V5h9v14zm-5 0V8H4V5h5v14z");
}
</style><path class="v2zu31-zx"/>`,
		"fallback": "material-symbols:timer-10-outline-sharp",
	});
}

export default Component;
