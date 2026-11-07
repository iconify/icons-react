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
		"content": `<style>.e107k_-kq {
  d: path("M3 6h11M3 11h5m-5 5h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tha3g8bwv {
  stroke-opacity: 0.4;
  d: path("M12 17a4.472 4.472 0 1 0 0-4m3 0h-3v-3");
}
</style><g class="nrj6p8qat"><path class="tha3g8bwv"/><path class="e107k_-kq"/></g>`,
		"fallback": "coolicons:list-restart-duocolor-round",
	});
}

export default Component;
