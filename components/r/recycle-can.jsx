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
		"content": `<style>.d6fv5ybdv {
  d: path("M12 18.285v.215L10.5 21h-6L3 18.5V5l1.5-2.5h6L12 5v9.285m0 2.6v.6M3 5h9m4.888 16.054a3.25 3.25 0 0 1-.513-5.869");
}

.lg5tegbmn {
  d: path("m21.25 21.25l-1.75-.5L20 19");
}

.sj2futumf {
  d: path("m14.75 14.75l1.75.5L16 17m3.112-2.054a3.25 3.25 0 0 1 .513 5.869");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d6fv5ybdv"/><path class="sj2futumf"/><path class="lg5tegbmn"/></g>`,
		"fallback": "uix-sharp:recycle-can",
	});
}

export default Component;
