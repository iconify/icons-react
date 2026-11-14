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
		"content": `<style>.w1cc3ol4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5H14m3 0h4.5m-19 5H8L9 13l1-1.5h4m3 0h4.5m-6.3 2H14v-9h3v7.2m-8 4.05l1.75 3a2 2 0 1 1-3.5 0Zm9-1.25V18m0 3h.01");
}
</style><path class="w1cc3ol4y"/>`,
		"fallback": "uix-sharp:pipeline-leak",
	});
}

export default Component;
