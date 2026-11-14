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
		"content": `<style>.jnj3e4btk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 5l7 7l-7 7l-7-7Zm0 7h.01M12 2.25h.01M21.75 12h.01M12 21.75h.01M2.25 12h.01");
}
</style><path class="jnj3e4btk"/>`,
		"fallback": "uix-sharp:tarp-diamond",
	});
}

export default Component;
