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
		"content": `<style>.g09euc63n {
  fill: currentColor;
  d: path("M4 17q-.425 0-.712-.288T3 16V8q0-.425.288-.712T4 7h16q.425 0 .713.288T21 8v1.175q0 .35-.275.6T20.1 10q-1.225-.025-2.35.425t-2 1.325t-1.325 1.988T14 16.1q0 .35-.238.625t-.587.275zm15 0h-2q-.425 0-.712-.288T16 16t.288-.712T17 15h2v-2q0-.425.288-.712T20 12t.713.288T21 13v2h2q.425 0 .713.288T24 16t-.288.713T23 17h-2v2q0 .425-.288.713T20 20t-.712-.288T19 19z");
}
</style><path class="g09euc63n"/>`,
		"fallback": "material-symbols:variable-add-rounded",
	});
}

export default Component;
