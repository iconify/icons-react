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
		"content": `<style>.fjnp3ebfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5v-7h6V10h7v5.5h6v5ZM12 3.25l.735 1.489l1.643.238l-1.189 1.159l.28 1.637L12 7l-1.469.773l.28-1.637l-1.189-1.159l1.643-.238Z");
}
</style><path class="fjnp3ebfs"/>`,
		"fallback": "uix-sharp:podium",
	});
}

export default Component;
