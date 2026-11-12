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
		"content": `<style>.lvy4ky89h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 15v-3l9-9l3 3l-9 9zm6-9l3 3M3 21l3-3l3 3m4 0h8");
}
</style><path class="lvy4ky89h"/>`,
		"fallback": "coolicons:text-edit-sharp",
	});
}

export default Component;
