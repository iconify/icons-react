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
		"content": `<style>.eq-2n3bmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3v3m6 0l-2 2m5 4h-3m0 6l-2-2m-4 5v-3m-6 0l2-2m-5-4h3m0-6l2 2");
}
</style><path class="eq-2n3bmc"/>`,
		"fallback": "coolicons:spinner-rays-sharp",
	});
}

export default Component;
