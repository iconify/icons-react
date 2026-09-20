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
		"content": `<style>.f42wdzbpu {
  fill: currentColor;
  d: path("M3 21L21 3v4.23h-3.384V21zm17-3.23V9.615h1v8.153zm-.23 3.46v-1.46h1.46v1.46z");
}
</style><path class="f42wdzbpu"/>`,
		"fallback": "material-symbols-light:signal-cellular-connected-no-internet-4-bar-outline-sharp",
	});
}

export default Component;
