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
		"content": `<style>.cloq45bpk {
  d: path("m8 14.75l.75-1.5l.75 1.5l.75 1.5l.75-1.5m2 0l.75-1.5l.75 1.5l.75 1.5l.75-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xn94aibwd {
  d: path("M5.5 4.5h13v15h-13zm-2.25-1v17m17.5-17v17M8.75 8h6.5m-6.5 2.25h6.5");
}
</style><g class="x2cwu0gfd"><path class="xn94aibwd"/><path class="cloq45bpk"/></g>`,
		"fallback": "iconoven:treaty-scroll-sharp",
	});
}

export default Component;
