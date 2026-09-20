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
		"content": `<style>.w_ti6-6pj {
  fill: currentColor;
  d: path("M9 21q-.425 0-.712-.288T8 20t.288-.712T9 19h6q.425 0 .713.288T16 20t-.288.713T15 21zm-1.075-3.925L7 5.15q-.075-.875.525-1.513T9 3h6q.875 0 1.475.637T17 5.15l-.925 11.925q-.05.4-.325.663t-.675.262h-6.15q-.4 0-.675-.262t-.325-.663");
}
</style><path class="w_ti6-6pj"/>`,
		"fallback": "material-symbols:on-hub-device-rounded",
	});
}

export default Component;
