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
		"content": `<style>.eqy9g_trh {
  d: path("M9 3h6v5H9ZM3 16h6v5H3Zm12 0h6v5h-6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yoptg-bym {
  stroke-opacity: 0.4;
  d: path("M12 8v4m-6 4v-4h12v4");
}
</style><g class="nrj6p8qat"><path class="yoptg-bym"/><path class="eqy9g_trh"/></g>`,
		"fallback": "coolicons:network-duocolor-sharp",
	});
}

export default Component;
