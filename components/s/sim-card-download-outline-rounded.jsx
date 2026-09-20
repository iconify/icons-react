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
		"content": `<style>.lsyef6_1e {
  fill: currentColor;
  d: path("M13 13.15V10q0-.425-.288-.712T12 9t-.712.288T11 10v3.15l-.9-.875Q9.825 12 9.413 12t-.713.3q-.275.275-.275.7t.275.7l2.6 2.6q.3.3.7.3t.7-.3l2.6-2.6q.275-.275.287-.687T15.3 12.3q-.275-.275-.687-.288t-.713.263zM6 22q-.825 0-1.412-.587T4 20V8.825q0-.4.15-.762t.425-.638l4.85-4.85q.275-.275.638-.425t.762-.15H18q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm0-2h12V4h-7.15L6 8.85zm0 0h12z");
}
</style><path class="lsyef6_1e"/>`,
		"fallback": "material-symbols:sim-card-download-outline-rounded",
	});
}

export default Component;
