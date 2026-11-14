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
		"content": `<style>.srpsm5kxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5h19v3h-19Zm7.5-9h8.5v9H10Zm-3.5 0v9m0-4.5H10M3 3.5h11M11.5 2L14 3.5L11.5 5");
}
</style><path class="srpsm5kxm"/>`,
		"fallback": "uix-sharp:shelf-pusher",
	});
}

export default Component;
