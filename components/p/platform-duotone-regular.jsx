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
		"content": `<style>.a9nj5hbth {
  d: path("M4 11h16");
}

.b7j1iitps {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 11h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ils7yp4cg {
  d: path("M2 16h20");
}

.klh0dobdz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 8h20");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.tg5bh2bez {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 16h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="klh0dobdz"/><path class="b7j1iitps"/><path class="tg5bh2bez"/><path class="mqtixbwqo"/><path class="a9nj5hbth"/><path class="ils7yp4cg"/></g>`,
		"fallback": "iconmind:platform-duotone-regular",
	});
}

export default Component;
