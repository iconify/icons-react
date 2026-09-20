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

.gxnpo3bcw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 11v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hmylfkbub {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 5v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q46ar0blg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 14h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tr_jskylo {
  d: path("M7 5v12");
}

.yih0nfb7c {
  d: path("M3 14h18");
}
</style><g class="nrj6p8qat"><path class="hmylfkbub"/><path class="gxnpo3bcw"/><path class="q46ar0blg"/><path class="tr_jskylo"/><path class="ftrg70bds"/><path class="yih0nfb7c"/></g>`,
		"fallback": "iconmind:min-p-duotone-regular",
	});
}

export default Component;
