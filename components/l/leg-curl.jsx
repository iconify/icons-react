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
		"content": `<style>.c6krkeopn {
  d: path("M16.5 16.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ojbb490tp {
  d: path("M2.5 7.5h14V11h-14Zm3 3.5v9.5m8-9.5v9.5m6.5-17l-3.25 5.75L19 14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ojbb490tp"/><path class="c6krkeopn"/></g>`,
		"fallback": "uix-sharp:leg-curl",
	});
}

export default Component;
