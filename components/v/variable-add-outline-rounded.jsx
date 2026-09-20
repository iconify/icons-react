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
		"content": `<style>.btz47pbux {
  fill: currentColor;
  d: path("M4 17q-.425 0-.712-.288T3 16V8q0-.425.288-.712T4 7h16q.425 0 .713.288T21 8v1q0 .425-.288.713T20 10t-.712-.288T19 9H5v6h8q.425 0 .713.288T14 16t-.288.713T13 17zm1-2V9zm14 2h-2q-.425 0-.712-.288T16 16t.288-.712T17 15h2v-2q0-.425.288-.712T20 12t.713.288T21 13v2h2q.425 0 .713.288T24 16t-.288.713T23 17h-2v2q0 .425-.288.713T20 20t-.712-.288T19 19z");
}
</style><path class="btz47pbux"/>`,
		"fallback": "material-symbols:variable-add-outline-rounded",
	});
}

export default Component;
