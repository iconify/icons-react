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
		"content": `<style>.aut8y9hmn {
  d: path("M7 12v7");
}

.du_3_4tit {
  d: path("M4 21.5h16");
}

.gxmqsnbdz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 12v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lykx779io {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 10.5 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ns4vl7b2c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 21.5h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ow_ax0v9r {
  d: path("M15 6v13");
}

.sgi0qkbzh {
  d: path("m9 10.5 3 -3");
}

.u9zm7_rri {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 6v13");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="gxmqsnbdz"/><path class="u9zm7_rri"/><path class="ns4vl7b2c"/><path class="lykx779io"/><path class="aut8y9hmn"/><path class="ow_ax0v9r"/><path class="du_3_4tit"/><path class="sgi0qkbzh"/></g>`,
		"fallback": "iconmind:uplift-duotone-regular",
	});
}

export default Component;
