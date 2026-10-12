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
		"content": `<style>.bthackxbz {
  d: path("M12 8V4.883L11 3.75m1 1.5c1-2 3-2.75 5.5-2.25c-.9 2.5-2.9 3.25-5.5 2.25ZM8.5 17.5V16l1.1-1.1");
}

.hqw4k-bbi {
  d: path("M12 8H9.333L9 10c-.25 1.75-1.25 2.5-2.25 3.75l-1.5 1.833v2.067c0 2.75 2.5 3.6 6.75 3.6s6.75-.85 6.75-3.6v-2.067l-1.5-1.833c-1-1.25-2-2-2.25-3.75l-.333-2z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hqw4k-bbi"/><path class="bthackxbz"/></g>`,
		"fallback": "iconoven:pear-sharp",
	});
}

export default Component;
