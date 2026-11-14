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
		"content": `<style>.s7imknk8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5H12v4H3.5Zm0 7.5H12v4H3.5Zm0 7.5H12v4H3.5Zm4.25-11V10m0 4v3.5M18 15v6m-3-3h6");
}
</style><path class="s7imknk8j"/>`,
		"fallback": "uix-sharp:sequence-add",
	});
}

export default Component;
