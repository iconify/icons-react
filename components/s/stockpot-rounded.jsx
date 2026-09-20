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
		"content": `<style>.lcpasab8m {
  fill: currentColor;
  d: path("M6 20q-1.25 0-2.125-.875T3 17V9q0-.425.288-.712T4 8h16q.425 0 .713.288T21 9v8q0 1.25-.875 2.125T18 20zM9 5V4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4v1h5q.425 0 .713.288T21 6t-.288.713T20 7H4q-.425 0-.712-.288T3 6t.288-.712T4 5z");
}
</style><path class="lcpasab8m"/>`,
		"fallback": "material-symbols:stockpot-rounded",
	});
}

export default Component;
