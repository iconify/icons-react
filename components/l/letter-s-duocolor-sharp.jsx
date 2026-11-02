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
		"content": `<style>.vj-ld18bt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 7a4 4 0 1 0-4 4a5 5 0 1 1-5 5");
}
</style><path class="vj-ld18bt"/>`,
		"fallback": "coolicons:letter-s-duocolor-sharp",
	});
}

export default Component;
