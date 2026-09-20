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
		"content": `<style>.ou8molblz {
  fill: currentColor;
  d: path("M5 19q-.825 0-1.412-.587T3 17V7q0-.825.588-1.412T5 5h1.325q.825 0 1.413.588T8.325 7v10q0 .825-.587 1.413T6.325 19zm6.325 0q-.825 0-1.412-.587T9.325 17V7q0-.825.588-1.412T11.325 5h1.325q.825 0 1.413.588T14.65 7v10q0 .825-.587 1.413T12.65 19zm6.325 0q-.825 0-1.412-.587T15.65 17V7q0-.825.588-1.412T17.65 5h1.325q.825 0 1.413.588T20.975 7v10q0 .825-.587 1.413T18.975 19z");
}
</style><path class="ou8molblz"/>`,
		"fallback": "material-symbols:view-column",
	});
}

export default Component;
