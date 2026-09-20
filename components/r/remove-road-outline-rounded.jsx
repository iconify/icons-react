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
		"content": `<style>.mwnry2luj {
  fill: currentColor;
  d: path("M18 12V5q0-.425.288-.712T19 4t.713.288T20 5v7q0 .425-.288.713T19 13t-.712-.288T18 12M4 19V5q0-.425.288-.712T5 4t.713.288T6 5v14q0 .425-.288.713T5 20t-.712-.288T4 19m7-12V5q0-.425.288-.712T12 4t.713.288T13 5v2q0 .425-.288.713T12 8t-.712-.288T11 7m0 6v-2q0-.425.288-.712T12 10t.713.288T13 11v2q0 .425-.288.713T12 14t-.712-.288T11 13m0 6v-2q0-.425.288-.712T12 16t.713.288T13 17v2q0 .425-.288.713T12 20t-.712-.288T11 19m7.95.875L17.525 21.3q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7l1.425-1.425l-1.4-1.4q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l1.4 1.425l1.425-1.425q.3-.3.7-.287t.7.312q.275.3.287.7t-.287.7l-1.425 1.425l1.425 1.45q.275.275.275.675t-.275.7q-.275.275-.7.275t-.7-.275z");
}
</style><path class="mwnry2luj"/>`,
		"fallback": "material-symbols:remove-road-outline-rounded",
	});
}

export default Component;
