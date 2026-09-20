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
		"content": `<style>.bso0bbbqi {
  d: path("M21 8A9 9 0 0 1 3 8");
}

.mqtixbwqo {
  d: path("M2 8h20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z8g2jgblp {
  d: path("M5 12h14");
}
</style><g class="nrj6p8qat"><path class="mqtixbwqo"/><path class="bso0bbbqi"/><path class="z8g2jgblp"/></g>`,
		"fallback": "iconmind:portion-outline-regular",
	});
}

export default Component;
