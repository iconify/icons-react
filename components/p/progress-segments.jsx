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
		"content": `<style>.ibt13dpgx {
  fill: currentColor;
  d: path("M2.75 8H7v8H2.75ZM10 8h4.25v8H10Z");
}

.szqqshbak {
  d: path("M17.25 8h4.25v8h-4.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ibt13dpgx"/><path class="szqqshbak"/></g>`,
		"fallback": "uix-sharp:progress-segments",
	});
}

export default Component;
