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
		"content": `<style>.d5p848ylk {
  d: path("m3.5 9.5l8.5-7l8.5 7V21h-17Z");
}

.hbfpzbbkz {
  d: path("M12 9.5C11.5 8 8.5 8 8.5 10c-2 0-2.5 2.5-1.5 3.5c-1 1.5 0 3 1.5 3h7c1.5 0 2.5-1.5 1.5-3c1-1 .5-3.5-1.5-3.5c0-2-3-2-3.5-.5Zm0 0v8.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpaw5r2wd {
  d: path("M7 13.5c1.5 0 2.25-.75 2.25-1.5M17 13.5c-1.5 0-2.25-.75-2.25-1.5");
}
</style><g class="ulnmmdpxh"><path class="d5p848ylk"/><path class="hbfpzbbkz"/><path class="xpaw5r2wd"/></g>`,
		"fallback": "uix-sharp:mental-health-clinic",
	});
}

export default Component;
