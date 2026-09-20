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
		"content": `<style>.us3anq7wm {
  fill: currentColor;
  d: path("M7.288 14.713Q7 14.425 7 14V9q0-.825.588-1.412T9 7h8.15l-1.875-1.875q-.3-.3-.3-.712t.3-.713t.712-.3t.713.3l3.6 3.6q.3.3.3.7t-.3.7l-3.6 3.6q-.275.275-.687.288T15.3 12.3t-.312-.712t.287-.713L17.15 9H9v5q0 .425-.288.713T8 15t-.712-.288M5 21q-.825 0-1.412-.587T3 19V5q0-.425.288-.712T4 4t.713.288T5 5v14h12v-3q0-.425.288-.712T18 15t.713.288T19 16v3q0 .825-.587 1.413T17 21z");
}
</style><path class="us3anq7wm"/>`,
		"fallback": "material-symbols:share-windows-outline-rounded",
	});
}

export default Component;
