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
		"content": `<style>.cxdl4147z {
  fill: currentColor;
  d: path("M11.5 15.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="cxdl4147z"/>`,
		"fallback": "material-symbols-light:rectangle-add-outline-sharp",
	});
}

export default Component;
