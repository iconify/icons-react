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
		"content": `<style>.uvaulu-cu {
  fill: currentColor;
  d: path("M7.713 13.713Q8 13.425 8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14t.713-.288m0-3Q8 10.426 8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11t.713-.288m0-3Q8 7.426 8 7t-.288-.712T7 6t-.712.288T6 7t.288.713T7 8t.713-.288M10 14h5v-2h-5zm0-3h8V9h-8zm0-3h8V6h-8zM2 22V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4z");
}
</style><path class="uvaulu-cu"/>`,
		"fallback": "material-symbols:speaker-notes-outline-sharp",
	});
}

export default Component;
