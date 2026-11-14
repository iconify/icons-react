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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzizp_blv {
  d: path("M13.25 10.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-6.75 8l5-5m-3.5 0h3.5V17");
}

.zli7lqbau {
  d: path("M3 20V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13");
}
</style><g class="ulnmmdpxh"><path class="zli7lqbau"/><path class="xzizp_blv"/></g>`,
		"fallback": "uix-sharp:shots-on-target",
	});
}

export default Component;
