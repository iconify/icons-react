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
		"content": `<style>.gpy49rhyg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 4v16M7 4h5a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7");
}
</style><path class="gpy49rhyg"/>`,
		"fallback": "coolicons:letter-d-sharp",
	});
}

export default Component;
