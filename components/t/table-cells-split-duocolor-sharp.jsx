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

.w7a-3c9dz {
  stroke-opacity: 0.4;
  d: path("M12 9v6");
}

.zgxuderfk {
  d: path("M4 4h16v16H4Zm0 5h16M4 15h16");
}
</style><g class="nrj6p8qat"><path class="w7a-3c9dz"/><path class="zgxuderfk"/></g>`,
		"fallback": "coolicons:table-cells-split-duocolor-sharp",
	});
}

export default Component;
