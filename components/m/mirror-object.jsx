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
		"content": `<style>.i_3fmrb5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4.5v15H3.5V10Zm6 0v15h5.5V10Zm-3-2V5m0 3.5V11m0 3.5V17m0 3.5v1");
}
</style><path class="i_3fmrb5p"/>`,
		"fallback": "uix-sharp:mirror-object",
	});
}

export default Component;
