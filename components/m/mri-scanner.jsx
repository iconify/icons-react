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
		"content": `<style>.kxxkqr3bf {
  d: path("M7.5 10.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdfuln5wu {
  d: path("M2.5 13h19v2h-19ZM6 15v6.5M18 15v6.5");
}

.xufh69gau {
  d: path("M4 3h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="xufh69gau"/><path class="kxxkqr3bf"/><path class="wdfuln5wu"/></g>`,
		"fallback": "uix-sharp:mri-scanner",
	});
}

export default Component;
