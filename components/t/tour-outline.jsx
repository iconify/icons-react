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
		"content": `<style>.shzfud-uq {
  fill: currentColor;
  d: path("M5.5 21.5v-19h1v2h13.77L18.46 9l1.808 4.5H6.5v8zm1-16v7zm7.066 4.566Q14 9.633 14 9t-.434-1.066Q13.133 7.5 12.5 7.5t-1.066.434T11 9t.434 1.066q.433.434 1.066.434t1.066-.434M6.5 12.5h12.28L17.39 9l1.392-3.5H6.5z");
}
</style><path class="shzfud-uq"/>`,
		"fallback": "material-symbols-light:tour-outline",
	});
}

export default Component;
