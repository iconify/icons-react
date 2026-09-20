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
		"content": `<style>.h_h7xqgow {
  fill: currentColor;
  d: path("M5 20v-1h14v1zm0-3.77V4h16v5.5h-3.692v6.73zM17.308 8.5H20V5h-2.692z");
}
</style><path class="h_h7xqgow"/>`,
		"fallback": "material-symbols-light:local-cafe-sharp",
	});
}

export default Component;
