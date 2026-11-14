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
		"content": `<style>.t4dz5ojor {
  d: path("m8.5 7l5 3.25l-5 3.25ZM16 7v6.5");
}

.u_s649tgm {
  d: path("M2.5 3.5h19V17h-19Zm5.5 17h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u_s649tgm"/><path class="t4dz5ojor"/></g>`,
		"fallback": "uix-sharp:next-episode",
	});
}

export default Component;
