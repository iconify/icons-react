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
		"content": `<style>.e7oxkoa8j {
  d: path("M2.5 2.5h12v19h-12Zm0 4.5h12");
}

.l-zfm87pz {
  d: path("M5.25 14a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM17 14a2 4.5 0 1 0 4 0a2 4.5 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e7oxkoa8j"/><path class="l-zfm87pz"/></g>`,
		"fallback": "uix-sharp:washing-machine-open",
	});
}

export default Component;
