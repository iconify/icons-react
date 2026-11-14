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
		"content": `<style>.hgjirkb5w {
  d: path("M2.807 12.787a12 12 0 0 1 18.386 0M12 20.5l-9.25-7.75M12 20.5l9.25-7.75M12 20.5l-5-11m5 11v-12m0 12l5-11");
}

.qsz9u7zad {
  fill: currentColor;
  d: path("M11 20.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hgjirkb5w"/><path class="qsz9u7zad"/></g>`,
		"fallback": "uix-sharp:menopause",
	});
}

export default Component;
