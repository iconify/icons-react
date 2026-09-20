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
		"content": `<style>.ewf1_tbvt {
  fill: currentColor;
  d: path("M5 9q-.425 0-.712-.288T4 8V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v3q0 .425-.288.713T19 9zm1 12q-.825 0-1.412-.587T4 19v-6H3q-.425 0-.712-.288T2 12t.288-.712T3 11h18q.425 0 .713.288T22 12t-.288.713T21 13h-1v6q0 .825-.587 1.413T18 21z");
}
</style><path class="ewf1_tbvt"/>`,
		"fallback": "material-symbols:split-scene-down-rounded",
	});
}

export default Component;
