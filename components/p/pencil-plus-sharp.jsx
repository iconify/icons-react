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
		"content": `<style>.krllxabcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 20v-3L16 7l3 3L9 20zm8-11l3 3M4 7h6M7 4v6");
}
</style><path class="krllxabcc"/>`,
		"fallback": "coolicons:pencil-plus-sharp",
	});
}

export default Component;
