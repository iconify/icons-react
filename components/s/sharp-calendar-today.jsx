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
		"content": `<style>.bfrw_dbmt {
  fill: currentColor;
  d: path("M22 3h-3V1h-2v2H7V1H5v2H2v20h20zm-2 18H4V8h16z");
}
</style><path class="bfrw_dbmt"/>`,
		"fallback": "ic:sharp-calendar-today",
	});
}

export default Component;
