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
		"content": `<style>.nimow2b_z {
  fill: currentColor;
  d: path("M3 20V8h18v12zM3 7V5h6V3h6v2h6v2z");
}
</style><path class="nimow2b_z"/>`,
		"fallback": "material-symbols:stockpot-sharp",
	});
}

export default Component;
