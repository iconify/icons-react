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
		"content": `<style>.yq9apbbii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5h16v11H4Zm11.5 0V6a3.5 3.5 0 0 0-7 0v1.5m3.5 7v3");
}
</style><path class="yq9apbbii"/>`,
		"fallback": "uix-sharp:smart-lock-open",
	});
}

export default Component;
