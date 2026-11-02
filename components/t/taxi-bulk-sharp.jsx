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
		"content": `<style>.b_93bsvbl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 12c0-.155.036-.308.106-.447l2-4A1 1 0 0 1 6 7h12c.379 0 .725.214.894.553l2 4c.07.139.106.292.106.447v6a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H9v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1Zm15.382-1l-1-2H6.618l-1 2Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.pssveetgf {
  d: path("M14 6h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2M3 13a1 1 0 0 1 0-2h.382l1.724-3.447A1 1 0 0 1 6 7h12c.379 0 .725.214.894.553L20.618 11H21a1 1 0 0 1 0 2Zm15.382-2l-1-2H6.618l-1 2ZM8 14h.01a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m8 0h.01a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="b_93bsvbl"/><path class="pssveetgf"/></g>`,
		"fallback": "coolicons:taxi-bulk-sharp",
	});
}

export default Component;
