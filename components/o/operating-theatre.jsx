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
		"content": `<style>.hbdkgmb7l {
  d: path("M12 8v13.5M5.5 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x1m36xanm {
  fill: currentColor;
  d: path("M7 2.5h10V6H7Z");
}

.xrv47me9p {
  d: path("M3 8h18v13.5H3Z");
}
</style><g class="ulnmmdpxh"><path class="xrv47me9p"/><path class="x1m36xanm"/><path class="hbdkgmb7l"/></g>`,
		"fallback": "uix-sharp:operating-theatre",
	});
}

export default Component;
