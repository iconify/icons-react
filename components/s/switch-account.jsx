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
		"content": `<style>.hb6wjkbbu {
  fill: currentColor;
  d: path("M16.125 10.125Q17 9.25 17 8t-.875-2.125T14 5t-2.125.875T11 8t.875 2.125T14 11t2.125-.875M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2zm4-6h12q-1.05-1.425-2.637-2.212T14 13t-3.363.788T8 16");
}
</style><path class="hb6wjkbbu"/>`,
		"fallback": "material-symbols:switch-account",
	});
}

export default Component;
