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
		"content": `<style>.jvykynp5y {
  stroke-opacity: 0.4;
  d: path("m18 21l3-3l-3-3m3 3H3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vy3fg0adm {
  d: path("M11 3h6m-5 0v8m4-8v8m-5-8a3 3 0 0 0 0 6h1");
}
</style><g class="nrj6p8qat"><path class="jvykynp5y"/><path class="vy3fg0adm"/></g>`,
		"fallback": "coolicons:text-direction-ltr-duocolor-round",
	});
}

export default Component;
