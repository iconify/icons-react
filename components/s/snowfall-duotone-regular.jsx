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
		"content": `<style>.a_bujybtt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 10.5v7m-3.5 0 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u2rqbibrm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 21h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uadcs425n {
  d: path("M16 10.5v7m-3.5 0 7 -7");
}

.uih_zvhtv {
  d: path("M4 21h16");
}

.uof3uv2_w {
  d: path("M8 3.5v7m-3.5 0 7 -7");
}

.uyc7v--_q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 3.5v7m-3.5 0 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="uyc7v--_q"/><path class="a_bujybtt"/><path class="u2rqbibrm"/><path class="uof3uv2_w"/><path class="uadcs425n"/><path class="uih_zvhtv"/></g>`,
		"fallback": "iconmind:snowfall-duotone-regular",
	});
}

export default Component;
