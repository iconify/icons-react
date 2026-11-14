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
		"content": `<style>.di5xaccnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5.5h9v13h-9ZM2 9.5h5.5m-5.5 5h5.5m9-5H22m-5.5 5H22");
}
</style><path class="di5xaccnq"/>`,
		"fallback": "uix-sharp:pipeline-step",
	});
}

export default Component;
