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
		"content": `<style>.elf2e4b3t {
  fill: currentColor;
  d: path("M3 8V3h7v5zm2-2h3V5H5zm3 0V5zM4.875 18.125Q4 17.25 4 16H2V9h8v5h3.5L17 9.65V7h-3V5h5v5.35L14.5 16H10q0 1.25-.875 2.125T7 19t-2.125-.875m2.838-1.412Q8 16.425 8 16H6q0 .425.288.713T7 17t.713-.288m9.162 1.413Q16 17.25 16 16t.875-2.125T19 13t2.125.875T22 16t-.875 2.125T19 19t-2.125-.875m2.838-1.412Q20 16.425 20 16t-.288-.712T19 15t-.712.288T18 16t.288.713T19 17t.713-.288M4 14h4v-3H4z");
}
</style><path class="elf2e4b3t"/>`,
		"fallback": "material-symbols:moped-package-outline-sharp",
	});
}

export default Component;
