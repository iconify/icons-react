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
		"content": `<style>.n9efjuzwq {
  fill: currentColor;
  d: path("M1 21v-2h1.05l1-15h9.875l1.025 15H18v-6.15q-1.3-.35-2.15-1.4T15 9q0-.85.325-1.588t.9-1.287q-.125-.275-.175-.55T16 5q0-1.25.875-2.125T19 2t2.125.875T22 5q0 .3-.05.575t-.175.55q.575.55.9 1.288T23 9q0 1.4-.85 2.45T20 12.85V19h3v2zm3.075-2h7.85L11.05 6h-.8v9H11v2H5v-2h.75V6h-.8zm3.175-4h1.5V6h-1.5z");
}
</style><path class="n9efjuzwq"/>`,
		"fallback": "material-symbols:playground-sharp",
	});
}

export default Component;
