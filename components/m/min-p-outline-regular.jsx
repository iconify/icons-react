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
		"content": `<style>.ftrg70bds {
  d: path("M17 11v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tr_jskylo {
  d: path("M7 5v12");
}

.yih0nfb7c {
  d: path("M3 14h18");
}
</style><g class="nrj6p8qat"><path class="tr_jskylo"/><path class="ftrg70bds"/><path class="yih0nfb7c"/></g>`,
		"fallback": "iconmind:min-p-outline-regular",
	});
}

export default Component;
