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
		"content": `<style>.b-5mtl4dz {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm6.5 6.5v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1r8o0bqa {
  d: path("M12 9a3 3 0 1 1-3 0");
}
</style><g class="ulnmmdpxh"><path class="b-5mtl4dz"/><path class="y1r8o0bqa"/></g>`,
		"fallback": "uix-sharp:lollipop",
	});
}

export default Component;
