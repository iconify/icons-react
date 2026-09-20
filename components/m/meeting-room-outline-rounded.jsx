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
		"content": `<style>.glckgez_j {
  fill: currentColor;
  d: path("M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h1V4q0-.425.288-.712T6 3h8q.425 0 .713.288T15 4h3q.425 0 .713.288T19 5v14h1q.425 0 .713.288T21 20t-.288.713T20 21h-2q-.425 0-.712-.288T17 20V6h-2v14q0 .425-.288.713T14 21zM7 5v14zm4.713 6.288Q11.425 11 11 11t-.712.288T10 12t.288.713T11 13t.713-.288T12 12t-.288-.712M7 19h6V5H7z");
}
</style><path class="glckgez_j"/>`,
		"fallback": "material-symbols:meeting-room-outline-rounded",
	});
}

export default Component;
