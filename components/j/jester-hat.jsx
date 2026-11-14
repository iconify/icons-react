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
		"content": `<style>.gngm57bdj {
  d: path("M2.25 13a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8.25-9.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM18.75 13a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.oft-kjb1k {
  d: path("M7.5 17.5c0-3.5-1-5.5-2.75-5.5C3.5 7.5 8 5.5 10 9.5c.5-2 1-3.25 2-4.25c1 1 1.5 2.25 2 4.25c2-4 6.5-2 5.25 2.5c-1.75 0-2.75 2-2.75 5.5m-10 0h11V21h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oft-kjb1k"/><path class="gngm57bdj"/></g>`,
		"fallback": "uix-sharp:jester-hat",
	});
}

export default Component;
