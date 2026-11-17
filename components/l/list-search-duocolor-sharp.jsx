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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o68mngblt {
  d: path("M3 6h11M3 11h6m-6 5h6");
}

.v3qjartne {
  stroke-opacity: 0.4;
  d: path("M14 13a2.828 2.828 0 1 1 4 4a2.828 2.828 0 0 1-4-4m4 4l3 3");
}
</style><g class="nrj6p8qat"><path class="v3qjartne"/><path class="o68mngblt"/></g>`,
		"fallback": "coolicons:list-search-duocolor-sharp",
	});
}

export default Component;
