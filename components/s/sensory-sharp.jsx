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
		"content": `<style>.exnmpfxtp {
  d: path("M2.75 14h4.5v7.25h-4.5zm14 0h4.5v7.25h-4.5zM5 14v-2a7 7 0 0 1 14 0v2");
}

.mwl_-kbks {
  d: path("M12 11.75q.45 3.3 3.75 3.75q-3.3.45-3.75 3.75q-.45-3.3-3.75-3.75q3.3-.45 3.75-3.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="exnmpfxtp"/><path class="mwl_-kbks"/></g>`,
		"fallback": "iconoven:sensory-sharp",
	});
}

export default Component;
