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
		"content": `<style>.ei4wczbty {
  d: path("m5.311 6.238l7 4.5a1.5 1.5 0 0 1 0 2.524l-7 4.5C4.313 18.404 3 17.687 3 16.5v-9c0-1.187 1.313-1.904 2.311-1.262");
}

.ktr2p3bbo {
  stroke-opacity: 0.4;
  d: path("M17 6v12m4-12v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ktr2p3bbo"/><path class="ei4wczbty"/></g>`,
		"fallback": "coolicons:play-pause-duocolor",
	});
}

export default Component;
