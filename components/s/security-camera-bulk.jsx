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
		"content": `<style>.b3az41lbw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2.789 9.398A3 3 0 0 1 4.91 5.723l11.591-3.106a3 3 0 0 1 3.675 2.122l1.035 3.863a3 3 0 0 1-2.121 3.675L7.499 15.383a3 3 0 0 1-3.675-2.122Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.h_4kdmbmy {
  d: path("m16.571 6.74l.518 1.932a1 1 0 0 1-1.932.518l-.518-1.932a1 1 0 0 1 1.932-.518M13 13.141V16h5a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-3h-6a1 1 0 0 1-1-1v-3.859a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="b3az41lbw"/><path class="h_4kdmbmy"/></g>`,
		"fallback": "coolicons:security-camera-bulk",
	});
}

export default Component;
