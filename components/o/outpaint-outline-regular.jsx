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
		"content": `<style>.b-fhdniix {
  d: path("M2 9a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x2nvzebcn {
  d: path("M17 7h4v10h-4");
}

.znv889pse {
  d: path("m5 14 2.5 -2.5L10 14");
}
</style><g class="nrj6p8qat"><path class="b-fhdniix"/><path class="znv889pse"/><path class="x2nvzebcn"/></g>`,
		"fallback": "iconmind:outpaint-outline-regular",
	});
}

export default Component;
