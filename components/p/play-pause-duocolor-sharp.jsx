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
		"content": `<style>.ktr2p3bbo {
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

.rn6ytobgk {
  d: path("m3 6l10 6l-10 6Z");
}
</style><g class="nrj6p8qat"><path class="ktr2p3bbo"/><path class="rn6ytobgk"/></g>`,
		"fallback": "coolicons:play-pause-duocolor-sharp",
	});
}

export default Component;
