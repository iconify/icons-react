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
		"content": `<style>.wzcgvvbmb {
  fill: currentColor;
  d: path("M4 22v-9.15q-1.3-.325-2.15-1.375T1 9.025h2q0 .8.588 1.388T4.975 11H6V8.85q-1.3-.325-2.15-1.375T3 5.025h2q0 .8.588 1.387T6.975 7H7.5L12 1l4.5 6h.525q.8 0 1.388-.587T19 5.025h2q0 1.4-.85 2.45T18 8.85V11h1.025q.8 0 1.388-.587T21 9.025h2q0 1.4-.85 2.45T20 12.85V22h-7v-5h-2v5zm6-15h4l-2-2.675zm-2 4h8V9H8zm-2 9h3v-5h6v5h3v-7H6zm6-9");
}
</style><path class="wzcgvvbmb"/>`,
		"fallback": "material-symbols:temple-buddhist-outline-sharp",
	});
}

export default Component;
