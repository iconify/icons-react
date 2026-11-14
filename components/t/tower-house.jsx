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
		"content": `<style>.b6o45zayg {
  d: path("m12 2.5l5.5 6v13h-11v-13Z");
}

.bvig7hbee {
  d: path("M10.5 10.5h3v3h-3Zm0 11V18a1.5 1.5 0 0 1 3 0v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b6o45zayg"/><path class="bvig7hbee"/></g>`,
		"fallback": "uix-sharp:tower-house",
	});
}

export default Component;
