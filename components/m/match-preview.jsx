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
		"content": `<style>.g-56du9fb {
  d: path("M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vidjvn7pv {
  d: path("M14.4 21.5H4v-19h14v10M7.5 7h7m-7 4h4");
}
</style><g class="ulnmmdpxh"><path class="vidjvn7pv"/><path class="g-56du9fb"/></g>`,
		"fallback": "uix-sharp:match-preview",
	});
}

export default Component;
