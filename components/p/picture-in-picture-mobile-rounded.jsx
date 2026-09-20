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
		"content": `<style>.a_aqnhbtp {
  fill: currentColor;
  d: path("M20 20q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4zm-3-8V6q0-.425-.288-.712T16 5h-4q-.425 0-.712.288T11 6v6q0 .425.288.713T12 13h4q.425 0 .713-.288T17 12");
}
</style><path class="a_aqnhbtp"/>`,
		"fallback": "material-symbols:picture-in-picture-mobile-rounded",
	});
}

export default Component;
