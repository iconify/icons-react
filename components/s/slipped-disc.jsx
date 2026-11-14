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
		"content": `<style>.f9m3vubkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h13v6H3Zm0 12h13v6H3ZM16 5l3 1m-3 13l3-1M4.5 10.75H15c3.5 0 6.5.5 6.5 1.25s-3 1.25-6.5 1.25H4.5c-.75 0-1-.5-1-1.25s.25-1.25 1-1.25Z");
}
</style><path class="f9m3vubkj"/>`,
		"fallback": "uix-sharp:slipped-disc",
	});
}

export default Component;
