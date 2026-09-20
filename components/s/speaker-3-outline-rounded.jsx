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
		"content": `<style>.gxc75uvdt {
  fill: currentColor;
  d: path("M7 19h10q.425 0 .713-.288T18 18V5q0-.425-.288-.712T17 4H7q-.425 0-.712.288T6 5v13q0 .425.288.713T7 19m0 2q-1.25 0-2.125-.875T4 18V5q0-1.25.875-2.125T7 2h10q1.25 0 2.125.875T20 5v13q0 1.25-.875 2.125T17 21h-1q0 .425-.288.713T15 22H9q-.425 0-.712-.288T8 21zm5-9.5");
}
</style><path class="gxc75uvdt"/>`,
		"fallback": "material-symbols:speaker-3-outline-rounded",
	});
}

export default Component;
