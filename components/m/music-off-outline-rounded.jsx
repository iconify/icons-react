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
		"content": `<style>.c0h3zlbcw {
  fill: currentColor;
  d: path("m19.1 21.9l-17-17q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275M14 7v1.75q0 .5-.312.738T13 9.725t-.687-.25t-.313-.75V4q0-.425.288-.712T13 3h4q.425 0 .713.288T18 4v2q0 .425-.288.713T17 7zm-4 14q-1.65 0-2.825-1.175T6 17t1.175-2.825T10 13q.575 0 1.063.138t.937.412V12l2 2v3q0 1.65-1.175 2.825T10 21");
}
</style><path class="c0h3zlbcw"/>`,
		"fallback": "material-symbols:music-off-outline-rounded",
	});
}

export default Component;
