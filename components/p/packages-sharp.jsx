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
		"content": `<style>.d34p8-b5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l4.5 2.25v5.625l4.5 2.25v5.625L16.5 21L12 18.75L7.5 21L3 18.75v-5.625l4.5-2.25V5.25zM7.5 5.25L12 7.5l4.5-2.25M12 7.5v5.625m-4.5-2.25l4.5 2.25l4.5-2.25M3 13.125l4.5 2.25l4.5-2.25l4.5 2.25l4.5-2.25m-13.5 2.25V21m4.5-7.875v5.625m4.5-3.375V21");
}
</style><path class="d34p8-b5i"/>`,
		"fallback": "coolicons:packages-sharp",
	});
}

export default Component;
