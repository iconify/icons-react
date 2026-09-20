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
		"content": `<style>.z_p-srb4p {
  fill: currentColor;
  d: path("M11.5 19h1v-1.85l3.5-3.5V9H8v4.65l3.5 3.5zm-2 1v-2l-2.925-2.925q-.275-.275-.425-.637T6 13.675V9q0-.825.588-1.412T8 7h1L8 8V4q0-.425.288-.712T9 3t.713.288T10 4v3h4V4q0-.425.288-.712T15 3t.713.288T16 4v4l-1-1h1q.825 0 1.413.588T18 9v4.675q0 .4-.15.763t-.425.637L14.5 18v2q0 .425-.288.713T13.5 21h-3q-.425 0-.712-.288T9.5 20m2.5-6");
}
</style><path class="z_p-srb4p"/>`,
		"fallback": "material-symbols:power-plug-outline-rounded",
	});
}

export default Component;
