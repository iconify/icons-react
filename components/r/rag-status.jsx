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
		"content": `<style>.d89l0lbmc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.625 1.25h-1.25q-2.123 0-3.624 1.501T6.25 6.375v11.25q0 2.123 1.501 3.624t3.624 1.501h1.25q2.123 0 3.624-1.501t1.501-3.624V6.375q0-2.123-1.501-3.624T12.625 1.25m-3.375 5Q9.25 3.5 12 3.5t2.75 2.75T12 9T9.25 6.25m2.75 3q2.75 0 2.75 2.75T12 14.75T9.25 12T12 9.25m-2.75 8.5Q9.25 15 12 15t2.75 2.75T12 20.5t-2.75-2.75");
}
</style><path class="d89l0lbmc"/>`,
		"fallback": "uix-solid:rag-status",
	});
}

export default Component;
