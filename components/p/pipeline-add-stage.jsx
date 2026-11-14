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
		"content": `<style>.pcy8_zkwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H7v18H2.5Zm7.25 0h4.5v11h-4.5ZM17 3h4.5v7H17Zm1 12v6m-3-3h6");
}
</style><path class="pcy8_zkwy"/>`,
		"fallback": "uix-sharp:pipeline-add-stage",
	});
}

export default Component;
