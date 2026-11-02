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
		"content": `<style>.b2tuw140m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 6h6c.64 0 1.36.36 2 1l1 1a1.414 1.414 0 0 1 0 2l-1 1c-.64.64-1.36 1-2 1H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm2-3v3m0 6v9");
}
</style><path class="b2tuw140m"/>`,
		"fallback": "coolicons:signpost",
	});
}

export default Component;
