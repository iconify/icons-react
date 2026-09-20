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
		"content": `<style>.ore5kkb6r {
  fill: currentColor;
  d: path("M8.692 14.308h6.616v-.166q0-.875-.88-1.355q-.878-.48-2.428-.48t-2.429.48t-.879 1.355zm4.374-4.05q.434-.433.434-1.066t-.434-1.066q-.433-.434-1.066-.434t-1.066.434t-.434 1.066t.434 1.067q.433.433 1.066.433t1.066-.433M9 20v-2H3V4h18v14h-6v2z");
}
</style><path class="ore5kkb6r"/>`,
		"fallback": "material-symbols-light:tv-signin-sharp",
	});
}

export default Component;
