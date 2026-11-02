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
		"content": `<style>.b73x2pe3x {
  d: path("M10.633 8h2.734l-.359-2.876a.999.999 0 1 1 1.984-.248L15.383 8H19a1 1 0 0 1 0 2h-3.367l.359 2.876a.999.999 0 1 1-1.984.248L13.617 10h-3.234l-.391 3.124a.999.999 0 1 1-1.984-.248L8.367 10H5a1 1 0 0 1 0-2h3.617l.391-3.124a.999.999 0 1 1 1.984.248ZM13 18h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3v-5a1 1 0 0 1 2 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.u86ybvqqj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 4h12a1 1 0 0 1 .97.757l2 8A.998.998 0 0 1 20 14H4a.998.998 0 0 1-.97-1.243l2-8A1 1 0 0 1 6 4");
}
</style><g class="cuyn6tgcc"><path class="u86ybvqqj"/><path class="b73x2pe3x"/></g>`,
		"fallback": "coolicons:solar-panel-bulk",
	});
}

export default Component;
