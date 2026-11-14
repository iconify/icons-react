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
		"content": `<style>.pi2hrjb7d {
  d: path("M12.2 18H2.5V3h19v12.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v8lps-b1i {
  d: path("M8 10a4 4 0 0 1 8 0m-9.5 0h3v3.5h-3Zm8.7 3.5h-.7V10h3v2.2M18 15v6m-3-3h6");
}
</style><g class="ulnmmdpxh"><path class="pi2hrjb7d"/><path class="v8lps-b1i"/></g>`,
		"fallback": "uix-sharp:radio-station-plus",
	});
}

export default Component;
