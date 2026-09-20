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
		"content": `<style>.dwto70uro {
  d: path("M15 10a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nonq38brg {
  d: path("M18 13v3.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oscmqi7_r {
  d: path("M2 19V9l2 -2h6l2 2v10");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="oscmqi7_r"/><path class="z9ittvbis"/><path class="dwto70uro"/><path class="nonq38brg"/></g>`,
		"fallback": "iconmind:tab-pin-outline-regular",
	});
}

export default Component;
