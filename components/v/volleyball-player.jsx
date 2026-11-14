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
		"content": `<style>.g3sbz7bae {
  d: path("M7 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2 5.75L7.75 15.5l3.75 2.75l-1 3.25m-2.75-6l-3.25 3L3 21");
}

.lmgzg9bra {
  d: path("M15.75 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.pn6kuqbsl {
  d: path("m4 10l5 1.25L16.25 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g3sbz7bae"/><path class="pn6kuqbsl"/><path class="lmgzg9bra"/></g>`,
		"fallback": "uix-sharp:volleyball-player",
	});
}

export default Component;
