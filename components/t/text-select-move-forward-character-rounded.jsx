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
		"content": `<style>.rx2ymbb4i {
  fill: currentColor;
  d: path("M11.288 4.713Q11 4.425 11 4t.288-.712T12 3t.713.288T13 4t-.288.713T12 5t-.712-.288m4 0Q15 4.426 15 4t.288-.712T16 3t.713.288T17 4t-.288.713T16 5t-.712-.288m4 0Q19 4.426 19 4t.288-.712T20 3t.713.288T21 4t-.288.713T20 5t-.712-.288m-8 16Q11 20.426 11 20t.288-.712T12 19t.713.288T13 20t-.288.713T12 21t-.712-.288m4 0Q15 20.426 15 20t.288-.712T16 19t.713.288T17 20t-.288.713T16 21t-.712-.288m4 0Q19 20.426 19 20t.288-.712T20 19t.713.288T21 20t-.288.713T20 21t-.712-.288M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h1V5H4q-.425 0-.712-.288T3 4t.288-.712T4 3h4q.425 0 .713.288T9 4t-.288.713T8 5H7v14h1q.425 0 .713.288T9 20t-.288.713T8 21zm13.175-8H11q-.425 0-.712-.288T10 12t.288-.712T11 11h6.175l-.9-.9Q16 9.825 16 9.413t.3-.713q.275-.275.7-.275t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.275.275-.687.288T16.3 15.3q-.275-.275-.275-.7t.275-.7z");
}
</style><path class="rx2ymbb4i"/>`,
		"fallback": "material-symbols:text-select-move-forward-character-rounded",
	});
}

export default Component;
