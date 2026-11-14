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
		"content": `<style>.bchikbeba {
  d: path("M2.5 3h19v16h-19Zm0 18.5h19");
}

.bj7c6pbaf {
  d: path("M10.5 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM12 9.5v-4m1.25 6.25l3.5 2m-6-2l-3.5 2");
}

.h8hbdqbky {
  d: path("M6.5 11a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bchikbeba"/><path class="h8hbdqbky"/><path class="bj7c6pbaf"/></g>`,
		"fallback": "uix-sharp:vault-room",
	});
}

export default Component;
