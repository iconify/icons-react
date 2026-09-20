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
		"content": `<style>.oyskbej9b {
  fill: currentColor;
  d: path("M9 18h6q.425 0 .713-.288T16 17v-3q0-.425-.288-.712T15 13H9q-.425 0-.712.288T8 14v3q0 .425.288.713T9 18m0-7h6q.425 0 .713-.288T16 10V7q0-.425-.288-.712T15 6H9q-.425 0-.712.288T8 7v3q0 .425.288.713T9 11m11 9q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4zm-2 0V4H6v16zm0-16H6z");
}
</style><path class="oyskbej9b"/>`,
		"fallback": "material-symbols:splitscreen-portrait-outline-rounded",
	});
}

export default Component;
