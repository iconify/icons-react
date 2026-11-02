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
		"content": `<style>.aztql-b4w {
  stroke-opacity: 0.4;
  d: path("M12 6H9a4 4 0 0 0-4 4m4-7l3 3l-3 3");
}

.lvoahibxm {
  d: path("M5 14v2a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a3 3 0 0 0-3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="aztql-b4w"/><path class="lvoahibxm"/></g>`,
		"fallback": "coolicons:rotate-right-duocolor-round",
	});
}

export default Component;
