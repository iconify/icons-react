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
		"content": `<style>.hnvnn0bgl {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Z");
}

.sa22r4b-z {
  d: path("M9.25 12.25a2.75 3.5 0 1 0 5.5 0a2.75 3.5 0 1 0-5.5 0Zm-1.5-1.75l1.5.75m7-.75l-1.5.75m-7 3.5l1.5-.75m7 .75l-1.5-.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hnvnn0bgl"/><path class="sa22r4b-z"/></g>`,
		"fallback": "uix-sharp:shield-bug",
	});
}

export default Component;
