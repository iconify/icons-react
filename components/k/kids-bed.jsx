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
		"content": `<style>.c7oxexnqh {
  d: path("M9.5 10H16v3");
}

.f4i4nt1-g {
  d: path("M3.5 19V8.5a3 3 0 0 1 6 0V13h11v6m-17-2.5h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f4i4nt1-g"/><path class="c7oxexnqh"/></g>`,
		"fallback": "uix-sharp:kids-bed",
	});
}

export default Component;
