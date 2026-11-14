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
		"content": `<style>.ujnmxya1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8V13h-8Zm0 13.5h8v5.5h-8Zm11-13.5h8V10h-8Zm1 15.5a3.25 3.25 0 0 1 6.5 0m-7.5 0h2v3.5h-2Zm6.5 0h2v3.5h-2Z");
}
</style><path class="ujnmxya1f"/>`,
		"fallback": "uix-sharp:support-dashboard",
	});
}

export default Component;
