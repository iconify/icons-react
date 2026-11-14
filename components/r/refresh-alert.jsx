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
		"content": `<style>.el34zpb9u {
  d: path("m15.5 9l3 3l3-3m-3.871 6.25A6.5 6.5 0 0 1 5.5 12");
}

.m3c9gbb4g {
  d: path("m2.5 15l3-3l3 3M12 9v3.25M12 15h.01");
}

.sxtlwx92v {
  d: path("M6.371 8.75A6.5 6.5 0 0 1 18.5 12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sxtlwx92v"/><path class="el34zpb9u"/><path class="m3c9gbb4g"/></g>`,
		"fallback": "uix-sharp:refresh-alert",
	});
}

export default Component;
