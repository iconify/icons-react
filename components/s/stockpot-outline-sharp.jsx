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
		"content": `<style>.rcq66ibnx {
  fill: currentColor;
  d: path("M3 20V8h18v12zm2-2h14v-8H5zM3 7V5h6V3h6v2h6v2zm9 7");
}
</style><path class="rcq66ibnx"/>`,
		"fallback": "material-symbols:stockpot-outline-sharp",
	});
}

export default Component;
