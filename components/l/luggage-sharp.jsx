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
		"content": `<style>.ymgh0yscl {
  fill: currentColor;
  d: path("M7 21H5V6h4V2h6v4h4v15h-2q0 .425-.288.713T16 22t-.712-.288T15 21H9q0 .425-.288.713T8 22t-.712-.288T7 21m2-3h2V9H9zm4 0h2V9h-2zM11 6h2V4h-2z");
}
</style><path class="ymgh0yscl"/>`,
		"fallback": "material-symbols:luggage-sharp",
	});
}

export default Component;
