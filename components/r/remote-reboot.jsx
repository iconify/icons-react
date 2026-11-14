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
		"content": `<style>.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.ozh69nb8u {
  d: path("M15 10.5a3 3 0 1 1-3-3");
}

.t3p3tgxzb {
  d: path("M10.75 6.25L12 7.5l-1.25 1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="ozh69nb8u"/><path class="t3p3tgxzb"/></g>`,
		"fallback": "uix-sharp:remote-reboot",
	});
}

export default Component;
