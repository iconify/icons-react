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
		"content": `<style>.un0gjkexc {
  fill: currentColor;
  d: path("M2 16V2h16v2H4v12zm9 6v-2H6V6h17v14h-5v2zm-3-4h13V8H8zm6.5-5");
}
</style><path class="un0gjkexc"/>`,
		"fallback": "material-symbols:tv-displays-outline-sharp",
	});
}

export default Component;
