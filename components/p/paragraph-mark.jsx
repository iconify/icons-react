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
		"content": `<style>.nssw8ibaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 4v8h-3a4 4 0 0 1 0-8Zm0 0h5m-5 0v16m4-16v16");
}
</style><path class="nssw8ibaa"/>`,
		"fallback": "uix-sharp:paragraph-mark",
	});
}

export default Component;
