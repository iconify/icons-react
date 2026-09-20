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
		"content": `<style>.nf3zvub1c {
  fill: currentColor;
  d: path("M3 19V5h18v14zm13.692-9.652H20V6h-3.308zm0 4.304H20v-3.304h-3.308zM4 18h11.692V6H4zm12.692 0H20v-3.348h-3.308z");
}
</style><path class="nf3zvub1c"/>`,
		"fallback": "material-symbols-light:view-sidebar-outline-sharp",
	});
}

export default Component;
