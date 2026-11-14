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
		"content": `<style>.p2k0h6ryu {
  d: path("M4.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.pfetj78he {
  d: path("M7 13.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zy5ie8b4l {
  d: path("M9.5 18a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM12 7c0-2 1-3.25 3-3.5");
}
</style><g class="ulnmmdpxh"><path class="p2k0h6ryu"/><path class="pfetj78he"/><path class="zy5ie8b4l"/></g>`,
		"fallback": "uix-sharp:pin-vineyard",
	});
}

export default Component;
