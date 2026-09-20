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
		"content": `<style>.v1y_thvuq {
  fill: currentColor;
  d: path("M9.875 18.125Q9 17.25 9 16t.875-2.125T12 13t2.125.875T15 16t-.875 2.125T12 19t-2.125-.875M17.2 10q-.8-1.35-2.162-2.175T12 7q-1.925 0-3.45 1.1t-2.175 2.825q-.15.425-.462.75T5.175 12q-.45 0-.725-.363t-.15-.787Q5 8.3 7.113 6.65T11.975 5q1.825 0 3.375.738T18 7.75V6q0-.425.288-.712T19 5t.713.288T20 6v5q0 .425-.288.713T19 12h-5q-.425 0-.712-.288T13 11t.288-.712T14 10z");
}
</style><path class="v1y_thvuq"/>`,
		"fallback": "material-symbols:step-over-rounded",
	});
}

export default Component;
