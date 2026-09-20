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
		"content": `<style>.bowtdgeqz {
  fill: currentColor;
  d: path("M11.213 12.213q.287-.288.287-.713t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287t.713-.288m3 0q.287-.287.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287t.713-.288m-6 0q.287-.287.287-.712t-.288-.712T7.5 10.5t-.712.288t-.288.712t.288.713t.712.287t.713-.288m9 0q.287-.287.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287t.713-.288M4 21v-2q-.825 0-1.412-.587T2 17V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v11q0 .825-.587 1.413T20 19v2h-1l-.65-2H5.675L5 21z");
}
</style><path class="bowtdgeqz"/>`,
		"fallback": "material-symbols:tv-with-assistant",
	});
}

export default Component;
