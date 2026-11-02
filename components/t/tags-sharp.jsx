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
		"content": `<style>.zf270mbcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6h3l6 6l-6 6l-6-6V6zm1 4h.01M15 6l6 6l-6 6");
}
</style><path class="zf270mbcm"/>`,
		"fallback": "coolicons:tags-sharp",
	});
}

export default Component;
