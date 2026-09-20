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
		"content": `<style>.dg7xilbnm {
  fill: currentColor;
  d: path("M11 20v-4H9q-2.075 0-3.537-1.463T4 11q0-1.5.825-2.762T7.05 6.4q.225-1.875 1.638-3.137T12 2t3.313 1.263T16.95 6.4q1.4.575 2.225 1.838T20 11q0 2.075-1.463 3.538T15 16h-2v4h5q.425 0 .713.288T19 21t-.288.713T18 22H6q-.425 0-.712-.288T5 21t.288-.712T6 20z");
}
</style><path class="dg7xilbnm"/>`,
		"fallback": "material-symbols:nature-rounded",
	});
}

export default Component;
