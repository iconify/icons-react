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
		"content": `<style>.af6makv8o {
  fill: currentColor;
  d: path("M8.25 6L12 1l3.75 5zM6 10V8.85q-1.3-.325-2.15-1.375T3 5.025h2q0 .8.588 1.387T6.975 7h10.05q.8 0 1.388-.587T19 5.025h2q0 1.4-.85 2.45T18 8.85V10zM4 22v-9.15q-1.3-.325-2.15-1.375T1 9.025h2q0 .8.588 1.388T4.975 11h14.05q.8 0 1.388-.587T21 9.025h2q0 1.4-.85 2.45T20 12.85V22h-7v-5h-2v5z");
}
</style><path class="af6makv8o"/>`,
		"fallback": "material-symbols:temple-buddhist-sharp",
	});
}

export default Component;
