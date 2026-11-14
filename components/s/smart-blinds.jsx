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
		"content": `<style>.jq-3owtdg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15A1.5 1.5 0 0 1 21 4a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 4a1.5 1.5 0 0 1 1.5-1.5m2.625 3h9.75A2.625 2.625 0 0 1 19.5 8.125v10.75a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 18.875V8.125A2.625 2.625 0 0 1 7.125 5.5M4.5 8.5h15m-15 3h15m-3 0v4");
}
</style><path class="jq-3owtdg"/>`,
		"fallback": "uix:smart-blinds",
	});
}

export default Component;
