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
		"content": `<style>.fr8m1_bim {
  d: path("M3 4.5h18V21H3Zm0 5h18m-13-7v4m8-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjf48bbgq {
  d: path("M9.5 18v-5.75H15L13.5 14l1.5 1.75H9.5");
}
</style><g class="ulnmmdpxh"><path class="fr8m1_bim"/><path class="zjf48bbgq"/></g>`,
		"fallback": "uix-sharp:marketing-plan",
	});
}

export default Component;
