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
		"content": `<style>.kks6v4bpg {
  d: path("M7.25 7.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM5 12.75c2.5 1 6 .25 9-1.75m.25 7h1l1.25-2.5l1.75 5l1.5-2.5h2");
}

.mcsqqlgam {
  d: path("M11.434 18.691c-.572.208-1.223.309-1.934.309C7 19 5.25 17.75 5 15l-.5-7c0-3 1.75-5.5 5-5.5s5 2.5 5 5.5l-.446 6.241");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mcsqqlgam"/><path class="kks6v4bpg"/></g>`,
		"fallback": "uix-sharp:nicu",
	});
}

export default Component;
