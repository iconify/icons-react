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
		"content": `<style>.cqfxe0bld {
  d: path("M7 12h10v9H7Zm0 3h10M7 18h10");
}

.rr5rhrirp {
  d: path("M3 21V9l9-5.5L21 9v12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rr5rhrirp"/><path class="cqfxe0bld"/></g>`,
		"fallback": "uix-sharp:warehouse",
	});
}

export default Component;
