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
		"content": `<style>.by01kgbxz {
  d: path("M15.5 2.5v4h4M8 10h4m-4 4h8m-8 4h6");
}

.oojvmqb3g {
  d: path("M15.5 2.5h-9a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oojvmqb3g"/><path class="by01kgbxz"/></g>`,
		"fallback": "uix-sharp:transcript",
	});
}

export default Component;
