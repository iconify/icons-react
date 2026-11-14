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
		"content": `<style>.ci_jg0bdo {
  fill: currentColor;
  d: path("M19.25 12.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-.5 4.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-2.25 3.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.rcmuyobly {
  d: path("M6.5 15c1.5-1.5 2.5-1.5 4 0s2.5 1.5 4 0");
}

.s23vqzxgd {
  d: path("M10.5 2.5s-7 7-7 11.5a7 7 0 0 0 14 0c0-4.5-7-11.5-7-11.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s23vqzxgd"/><path class="rcmuyobly"/><path class="ci_jg0bdo"/></g>`,
		"fallback": "uix-sharp:wastewater",
	});
}

export default Component;
