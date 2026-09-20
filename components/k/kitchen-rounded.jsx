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
		"content": `<style>.csbj2_sam {
  fill: currentColor;
  d: path("M9.713 7.713Q10 7.425 10 7V6q0-.425-.288-.712T9 5t-.712.288T8 6v1q0 .425.288.713T9 8t.713-.288m0 9Q10 16.426 10 16v-3q0-.425-.288-.712T9 12t-.712.288T8 13v3q0 .425.288.713T9 17t.713-.288M6 22q-.825 0-1.412-.587T4 20v-9h16v9q0 .825-.587 1.413T18 22zM4 9V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v5z");
}
</style><path class="csbj2_sam"/>`,
		"fallback": "material-symbols:kitchen-rounded",
	});
}

export default Component;
