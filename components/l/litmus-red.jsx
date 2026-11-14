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
		"content": `<style>.e8tw6fbis {
  d: path("M3.5 12h2v7A2.5 2.5 0 0 0 8 21.5h8a2.5 2.5 0 0 0 2.5-2.5v-7h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ya6sr4buk {
  fill: currentColor;
  d: path("m13.058 2.401l3.913.832l-3.223 15.161l-3.912-.832Z");
}
</style><g class="ulnmmdpxh"><path class="e8tw6fbis"/><path class="ya6sr4buk"/></g>`,
		"fallback": "uix-sharp:litmus-red",
	});
}

export default Component;
