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
		"content": `<style>.btrj1hi8t {
  d: path("M2.75 21.25V12a9.25 9.25 0 0 1 18.5 0v9.25m-18.5 0h18.5");
}

.ertrcciqm {
  d: path("M12 13.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm0 2.5v2");
}

.h6e9_k1gn {
  d: path("M7.5 21.25V13a4.5 4.5 0 0 1 9 0v8.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="btrj1hi8t"/><path class="h6e9_k1gn"/><path class="ertrcciqm"/></g>`,
		"fallback": "iconoven:vpn-sharp",
	});
}

export default Component;
