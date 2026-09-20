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
		"content": `<style>.hdvdp_bbz {
  fill: currentColor;
  d: path("M2.875 14.125Q2 13.25 2 12t.875-2.125T5 9t2.125.875T8 12t-.875 2.125T5 15t-2.125-.875m2.838-1.412Q6 12.425 6 12t-.288-.712T5 11t-.712.288T4 12t.288.713T5 13t.713-.288m4.162 1.413Q9 13.25 9 12t.875-2.125T12 9t2.125.875T15 12t-.875 2.125T12 15t-2.125-.875m2.838-1.412Q13 12.425 13 12t-.288-.712T12 11t-.712.288T11 12t.288.713T12 13t.713-.288m4.162 1.413Q16 13.25 16 12t.875-2.125T19 9t2.125.875T22 12t-.875 2.125T19 15t-2.125-.875");
}
</style><path class="hdvdp_bbz"/>`,
		"fallback": "material-symbols:steppers-outline-sharp",
	});
}

export default Component;
