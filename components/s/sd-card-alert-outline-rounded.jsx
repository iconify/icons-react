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
		"content": `<style>.ax81ux_nv {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V8.825q0-.4.15-.762t.425-.638l4.85-4.85q.275-.275.638-.425t.762-.15H18q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-2h12V4h-7.15L6 8.85zm6-3q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m.713-4.288Q13 12.425 13 12V9q0-.425-.288-.712T12 8t-.712.288T11 9v3q0 .425.288.713T12 13t.713-.288M6 20h12z");
}
</style><path class="ax81ux_nv"/>`,
		"fallback": "material-symbols:sd-card-alert-outline-rounded",
	});
}

export default Component;
