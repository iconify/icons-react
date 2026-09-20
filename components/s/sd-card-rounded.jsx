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
		"content": `<style>.m3qptsb1w {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V8.825q0-.4.15-.762t.425-.638l4.85-4.85q.275-.275.638-.425t.762-.15H18q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm4.713-11.288Q11 10.425 11 10V8q0-.425-.288-.712T10 7t-.712.288T9 8v2q0 .425.288.713T10 11t.713-.288m3 0Q14 10.426 14 10V8q0-.425-.288-.712T13 7t-.712.288T12 8v2q0 .425.288.713T13 11t.713-.288m3 0Q17 10.426 17 10V8q0-.425-.288-.712T16 7t-.712.288T15 8v2q0 .425.288.713T16 11t.713-.288");
}
</style><path class="m3qptsb1w"/>`,
		"fallback": "material-symbols:sd-card-rounded",
	});
}

export default Component;
