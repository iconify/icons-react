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
		"content": `<style>.b4x_isbqv {
  d: path("M8 6H5v12h3");
}

.d_6ujebpi {
  d: path("M16 6h3v12h-3");
}

.flq2w3bwj {
  d: path("m9.5 9.5 5 5");
}

.i7k9zlcho {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9.5 9.5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lx3jyybfn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 6h3v12h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x87wa6b5t {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 6H5v12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="x87wa6b5t"/><path class="lx3jyybfn"/><path class="i7k9zlcho"/><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="flq2w3bwj"/></g>`,
		"fallback": "iconmind:prompt-cache-miss-duotone-bold",
	});
}

export default Component;
