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
		"content": `<style>.ckawxab4i {
  d: path("m4 11 8 -8 8 8");
}

.egu9ezovw {
  d: path("m4 20 8 -8 8 8");
}

.he5ikxbaq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 11 8 -8 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wc9wh3b0p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 20 8 -8 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="he5ikxbaq"/><path class="wc9wh3b0p"/><path class="ckawxab4i"/><path class="egu9ezovw"/></g>`,
		"fallback": "iconmind:priority-duotone-regular",
	});
}

export default Component;
