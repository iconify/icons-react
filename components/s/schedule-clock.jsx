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
		"content": `<style>.b5ns89btf {
  d: path("M12.5 20.5h-9V5h17v7.5M8 3v4m8-4v4M3.5 10h17M8 3v4m8-4v4M3.5 10h17M7 13.75h2.75M7 17.25h2.75");
}

.d0jfembef {
  d: path("M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.h__htqbdq {
  d: path("M18 16.75V18l1 .75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b5ns89btf"/><path class="d0jfembef"/><path class="h__htqbdq"/></g>`,
		"fallback": "uix-sharp:schedule-clock",
	});
}

export default Component;
