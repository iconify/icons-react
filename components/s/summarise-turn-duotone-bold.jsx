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

.faaxtxspp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 9h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.lx3jyybfn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 6h3v12h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o-o1ktb0e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9.5 12 2.5 2.5 2.5 -2.5");
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

.y_2nr8hoa {
  d: path("m9.5 12 2.5 2.5 2.5 -2.5");
}
</style><g class="s0phu2bbs"><path class="x87wa6b5t"/><path class="lx3jyybfn"/><path class="faaxtxspp"/><path class="o-o1ktb0e"/><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="jlfjgzbqx"/><path class="y_2nr8hoa"/></g>`,
		"fallback": "iconmind:summarise-turn-duotone-bold",
	});
}

export default Component;
