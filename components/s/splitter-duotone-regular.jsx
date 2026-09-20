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
		"content": `<style>.asd1gsbjs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fyyr_6-1m {
  d: path("m10 12 4 -4h7");
}

.jcxg2bbvb {
  d: path("M2 12h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rn124nbga {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 12 4 -4h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ue-dwjbmw {
  d: path("m10 12 4 4h7");
}

.wh01pcbbr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 12 4 4h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="asd1gsbjs"/><path class="rn124nbga"/><path class="wh01pcbbr"/><path class="jcxg2bbvb"/><path class="fyyr_6-1m"/><path class="ue-dwjbmw"/></g>`,
		"fallback": "iconmind:splitter-duotone-regular",
	});
}

export default Component;
