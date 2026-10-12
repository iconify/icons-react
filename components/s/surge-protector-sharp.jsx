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
		"content": `<style>.a0g_eunes {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 12h.01");
}

.t2m-dwb6r {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.25h15v7.5h-15zm15 3.75h2.5v9.25");
}

.tg88rjk5z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3m4.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="t2m-dwb6r"/><path class="tg88rjk5z"/><path class="a0g_eunes"/></g>`,
		"fallback": "iconoven:surge-protector-sharp",
	});
}

export default Component;
