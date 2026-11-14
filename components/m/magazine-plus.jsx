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
		"content": `<style>.cd__-1bxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 20.5H4v-18h14v9.7M7 6.5h8m-8 4h4.5M18 15v6m-3-3h6");
}
</style><path class="cd__-1bxa"/>`,
		"fallback": "uix-sharp:magazine-plus",
	});
}

export default Component;
