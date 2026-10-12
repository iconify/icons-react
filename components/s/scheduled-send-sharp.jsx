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
		"content": `<style>.awhojtvbn {
  d: path("M15.82 3.61L4.18 8.14l-.93.36l.92.4l3.91 1.7l.92.4l.4.92l1.7 3.91l.4.92l.36-.93l4.53-11.64l.36-.93zM9 11l3.25-3.25");
}

.rygxc4fup {
  cx: 17.75px;
  cy: 17.75px;
  r: 3.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yn24rhbfo {
  d: path("M17.75 16v1.75l1.25.75");
}
</style><g class="x2cwu0gfd"><path class="awhojtvbn"/><circle class="rygxc4fup"/><path class="yn24rhbfo"/></g>`,
		"fallback": "iconoven:scheduled-send-sharp",
	});
}

export default Component;
