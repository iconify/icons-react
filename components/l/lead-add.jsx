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
		"content": `<style>.hkqmm5b0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.172 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.801 0 3.422.404 4.692 1.117M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM18 15v6m-3-3h6");
}
</style><path class="hkqmm5b0k"/>`,
		"fallback": "uix-sharp:lead-add",
	});
}

export default Component;
