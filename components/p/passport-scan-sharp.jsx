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
		"content": `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.c3rr-6blb {
  cx: 12px;
  cy: 10.25px;
  r: 3.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpbb2cdtq {
  d: path("M8.25 10.25h7.5M12 6.5a7.5 7.5 0 0 0 0 7.5m-3 3.5h6");
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><circle class="c3rr-6blb"/><path class="xpbb2cdtq"/></g>`,
		"fallback": "iconoven:passport-scan-sharp",
	});
}

export default Component;
