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
		"content": `<style>.lwt4ul4eh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3C2 8 2 16 7 21M17 3c5 5 5 13 0 18M14 6l-5 6h6l-5 6");
}
</style><path class="lwt4ul4eh"/>`,
		"fallback": "coolicons:serverless-duotone",
	});
}

export default Component;
