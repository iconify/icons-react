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
		"content": `<style>.as0st7bow {
  fill: currentColor;
  d: path("M5.5 22.5L2 19l3.5-3.5l1.425 1.4l-1.1 1.1h12.35L17.1 16.9l1.4-1.4L22 19l-3.5 3.5l-1.425-1.4l1.1-1.1H5.825L6.9 21.1zM3 14V2h18v12zm9-3q1.25 0 2.125-.875T15 8t-.875-2.125T12 5t-2.125.875T9 8t.875 2.125T12 11m-7 1h2q0-.825-.587-1.412T5 10zm12 0h2v-2q-.825 0-1.412.588T17 12m2-6V4h-2q0 .825.588 1.413T19 6M5 6q.825 0 1.413-.587T7 4H5z");
}
</style><path class="as0st7bow"/>`,
		"fallback": "material-symbols:money-range-sharp",
	});
}

export default Component;
