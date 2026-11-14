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
		"content": `<style>.j2xts6_fh {
  d: path("m8.283 12.404l4.698 1.71l-1.881 5.168l-4.698-1.71Z");
}

.p7tetd59q {
  d: path("M2.5 9.5h19c0 7.5-4.5 12-9.5 12S2.5 17 2.5 9.5Zm12.065-7.048l-3.933 10.807");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p7tetd59q"/><path class="j2xts6_fh"/></g>`,
		"fallback": "uix-sharp:mixing-spatula",
	});
}

export default Component;
