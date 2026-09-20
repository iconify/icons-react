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
		"content": `<style>.akhe8vn1q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 15h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fu-hexb2o {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 15a6 6 0 0 1 12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l8dn9jbyp {
  d: path("M2 15h20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.olqfcgidt {
  d: path("M6 19h12");
}

.x043no3hn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 19h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y006j0y9x {
  d: path("M6 15a6 6 0 0 1 12 0");
}
</style><g class="nrj6p8qat"><path class="akhe8vn1q"/><path class="fu-hexb2o"/><path class="x043no3hn"/><path class="l8dn9jbyp"/><path class="y006j0y9x"/><path class="olqfcgidt"/></g>`,
		"fallback": "iconmind:sunhat-duotone-regular",
	});
}

export default Component;
