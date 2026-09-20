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
		"content": `<style>.ccgk_xb3n {
  d: path("M7 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.e1vgu1brh {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4.5a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.jotdonbiv {
  d: path("M7 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n2l08-bfj {
  d: path("M4 15.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V20a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e1vgu1brh"/><path class="jotdonbiv"/><path class="n2l08-bfj"/><path class="ccgk_xb3n"/></g>`,
		"fallback": "iconmind:server-outline-regular",
	});
}

export default Component;
