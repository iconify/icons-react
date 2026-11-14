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
		"content": `<style>.hvste4bra {
  d: path("m7.5 2.5l4.5 4l4.5-4m-4.5 4v3m-5.5 0h11v12h-11Z");
}

.olf283r-c {
  d: path("M10.25 14a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-.75 4.75h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hvste4bra"/><path class="olf283r-c"/></g>`,
		"fallback": "uix-sharp:paddock-pass",
	});
}

export default Component;
