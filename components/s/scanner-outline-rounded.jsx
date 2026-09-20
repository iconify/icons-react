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
		"content": `<style>.v095z4b1o {
  fill: currentColor;
  d: path("M17.6 12L4.45 7.25q-.4-.15-.575-.525T3.85 5.95t.525-.575t.775-.025L19.8 10.7q.5.2.85.7t.35 1.1V18q0 .825-.587 1.413T19 20H5q-.825 0-1.412-.587T3 18v-4q0-.825.588-1.412T5 12zm1.4 6v-4H5v4zm-8-1h6q.425 0 .713-.288T18 16t-.288-.712T17 15h-6q-.425 0-.712.288T10 16t.288.713T11 17m-3.287-.288Q8 16.426 8 16t-.288-.712T7 15t-.712.288T6 16t.288.713T7 17t.713-.288M5 18v-4z");
}
</style><path class="v095z4b1o"/>`,
		"fallback": "material-symbols:scanner-outline-rounded",
	});
}

export default Component;
