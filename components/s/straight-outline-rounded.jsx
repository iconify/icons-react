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
		"content": `<style>.colqzacop {
  fill: currentColor;
  d: path("m11 6.825l-.9.9Q9.825 8 9.413 8T8.7 7.7q-.275-.275-.275-.7t.275-.7l2.6-2.6q.3-.3.7-.3t.7.3l2.6 2.6q.275.275.287.687T15.3 7.7q-.275.275-.7.275t-.7-.275l-.9-.875V20q0 .425-.287.713T12 21t-.712-.288T11 20z");
}
</style><path class="colqzacop"/>`,
		"fallback": "material-symbols:straight-outline-rounded",
	});
}

export default Component;
