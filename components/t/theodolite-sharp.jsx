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
		"content": `<style>.i_s-8lb3x {
  d: path("M3.25 4.75h14v3.5h-14zM7 8.25h10v8.5H7z");
}

.kjie_mbme {
  d: path("M10.5 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-2 4.25l-2.75 4.5m9.75-4.5l2.75 4.5M12 16.75v4.5M17.25 6.5h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="i_s-8lb3x"/><path class="kjie_mbme"/></g>`,
		"fallback": "iconoven:theodolite-sharp",
	});
}

export default Component;
