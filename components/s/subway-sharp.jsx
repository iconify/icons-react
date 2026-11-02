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
		"content": `<style>.pgzk12b8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 12a5 5 0 0 1 10 0v7H7zm3 7l-1 2m5-2l1 2m-8-9h10M3 21v-9a9 9 0 0 1 18 0v9m-11-6h.01M14 15h.01");
}
</style><path class="pgzk12b8m"/>`,
		"fallback": "coolicons:subway-sharp",
	});
}

export default Component;
