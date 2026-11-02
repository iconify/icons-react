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
		"content": `<style>.gqs79murb {
  d: path("M9 8v3a3 3 0 0 0 3 3c.828 0 1.457-.457 2-1m1-5V6a3 3 0 0 0-3-3c-.572 0-.545-.278-1 0");
}

.lhbnqpmfl {
  stroke-opacity: 0.4;
  d: path("M12 18v3M5 10v1a7 7 0 0 0 7 7c1.933 0 3.733-.733 5-2M3 2l19 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lhbnqpmfl"/><path class="gqs79murb"/></g>`,
		"fallback": "coolicons:microphone-off-duocolor-sharp",
	});
}

export default Component;
