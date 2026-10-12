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
		"content": `<style>.j61d72bmp {
  d: path("M3 13h9m-9 5h12");
}

.qdb17cczo {
  cx: 17px;
  cy: 7px;
  r: 4.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ybj1st_9r {
  d: path("M16 8.6V5.4h2.35v2.2H16m1.25 0l.75 1");
}
</style><g class="x2cwu0gfd"><path class="j61d72bmp"/><circle class="qdb17cczo"/><path class="ybj1st_9r"/></g>`,
		"fallback": "iconoven:registered-sign-sharp",
	});
}

export default Component;
