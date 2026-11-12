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
		"content": `<style>.b1_d_sxhu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 7h12v6H6ZM3 17h18v4H3ZM9 7V3h6v4m-5 0v6m4-6v6");
}
</style><path class="b1_d_sxhu"/>`,
		"fallback": "coolicons:luggage-conveyor-sharp",
	});
}

export default Component;
