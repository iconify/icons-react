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
		"content": `<style>.ui3i53bdr {
  fill: currentColor;
  d: path("M5.2 22L3 2h18l-2.2 20zm.7-12L7 20h10l1.1-10zm-.25-2h12.7l.4-4H5.25zm5.75 8.75q-.25-.25-.25-.6q0-.375.213-.862T12 14.174q.425.625.638 1.113t.212.862q0 .35-.25.6T12 17t-.6-.25m2.625 1.425q.825-.825.825-2.025q0-1.025-.662-2.225T12 11q-1.525 1.725-2.187 2.925T9.15 16.15q0 1.2.825 2.025T12 19t2.025-.825M7 20h10z");
}
</style><path class="ui3i53bdr"/>`,
		"fallback": "material-symbols:local-drink-outline-sharp",
	});
}

export default Component;
