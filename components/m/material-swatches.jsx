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
		"content": `<style>.od6-2ybuq {
  d: path("M9.5 9.5h12v12h-12Zm-7-3h12m-5 11h12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wutk-mbkx {
  d: path("M9.5 14.5h-5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5");
}
</style><g class="ulnmmdpxh"><path class="wutk-mbkx"/><path class="od6-2ybuq"/></g>`,
		"fallback": "uix-sharp:material-swatches",
	});
}

export default Component;
