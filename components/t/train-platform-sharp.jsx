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
		"content": `<style>.b07--9b2z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15 16.75l-1 4.5m5-4.5l1 4.5m-17.25-7h7v7m-7-4h4");
}

.dusy-zblt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.75 4.25h8.5v12.5h-8.5zm0 5.25h8.5");
}

.urx0ynb3t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 13.25h.01m3.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="dusy-zblt"/><path class="urx0ynb3t"/><path class="b07--9b2z"/></g>`,
		"fallback": "iconoven:train-platform-sharp",
	});
}

export default Component;
