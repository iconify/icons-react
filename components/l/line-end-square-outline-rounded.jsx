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
		"content": `<style>.r1uwbbccy {
  fill: currentColor;
  d: path("M13 15.5h7v-7h-7zm-1 2q-.425 0-.712-.288T11 16.5V13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h8V7.5q0-.425.288-.712T12 6.5h9q.425 0 .713.288T22 7.5v9q0 .425-.288.713T21 17.5zm4.5-5.5");
}
</style><path class="r1uwbbccy"/>`,
		"fallback": "material-symbols:line-end-square-outline-rounded",
	});
}

export default Component;
