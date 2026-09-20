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
		"content": `<style>.c4-tbwbwz {
  fill: currentColor;
  d: path("M3 18q-.425 0-.712-.288T2 17V7q0-.425.288-.712T3 6t.713.288T4 7v10q0 .425-.288.713T3 18m6.825-5l2.875 2.875q.3.3.3.713t-.3.712q-.3.275-.712.275T11.3 17.3l-4.6-4.6q-.15-.15-.213-.325T6.426 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275q.3.3.288.713T12.7 8.1L9.825 11H21q.425 0 .713.288T22 12t-.288.713T21 13z");
}
</style><path class="c4-tbwbwz"/>`,
		"fallback": "material-symbols:keyboard-tab-rtl-outline-rounded",
	});
}

export default Component;
