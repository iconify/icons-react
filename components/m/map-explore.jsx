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
		"content": `<style>.g-56du9fb {
  d: path("M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zl34r3bvg {
  d: path("M12.956 19.773L8.5 18.5l-6 2v-15l6-2l7 2l6-2v10.971M8.5 3.5v15m7-13v7.4");
}
</style><g class="ulnmmdpxh"><path class="zl34r3bvg"/><path class="g-56du9fb"/></g>`,
		"fallback": "uix-sharp:map-explore",
	});
}

export default Component;
