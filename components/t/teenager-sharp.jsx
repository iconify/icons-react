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
		"content": `<style>.aj6v90bht {
  cx: 12px;
  cy: 9.75px;
  r: 2.5px;
}

.d02b4huzz {
  d: path("M3.75 20.25h17.5v-5.083L17.5 13.75v-4a5.5 5.5 0 0 0-11 0v4l-3.75 1.417v5.083z");
}

.wzd42obmw {
  d: path("M10.5 15.25v2.5m3-2.5v2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="d02b4huzz"/><circle class="aj6v90bht"/><path class="wzd42obmw"/></g>`,
		"fallback": "iconoven:teenager-sharp",
	});
}

export default Component;
