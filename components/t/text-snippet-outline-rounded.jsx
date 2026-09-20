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
		"content": `<style>.vylmy2_ge {
  fill: currentColor;
  d: path("M5 19h14V9.825L14.175 5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h9.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V19q0 .825-.587 1.413T19 21zm3-4h8q.425 0 .713-.288T17 16t-.288-.712T16 15H8q-.425 0-.712.288T7 16t.288.713T8 17m0-4h8q.425 0 .713-.288T17 12t-.288-.712T16 11H8q-.425 0-.712.288T7 12t.288.713T8 13m0-4h5q.425 0 .713-.288T14 8t-.288-.712T13 7H8q-.425 0-.712.288T7 8t.288.713T8 9M5 19V5z");
}
</style><path class="vylmy2_ge"/>`,
		"fallback": "material-symbols:text-snippet-outline-rounded",
	});
}

export default Component;
