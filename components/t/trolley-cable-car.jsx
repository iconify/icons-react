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
		"content": `<style>.q04tzdsdy {
  fill: currentColor;
  d: path("M6 21v-.5L7.5 19H3v-2h1V6H3V4h4V2h10v2h4v2h-1v11h1v2h-4.5l1.5 1.5v.5h-2l-2-2h-4l-2 2zm7-11h5V7h-5zm-7 0h5V7H6zm6 6q.625 0 1.063-.437T13.5 14.5t-.437-1.062T12 13t-1.062.438T10.5 14.5t.438 1.063T12 16");
}
</style><path class="q04tzdsdy"/>`,
		"fallback": "material-symbols:trolley-cable-car",
	});
}

export default Component;
