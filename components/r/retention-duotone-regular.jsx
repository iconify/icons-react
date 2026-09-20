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
		"content": `<style>.cjsg0ab2y {
  d: path("M2 20h20");
}

.cub64ac5a {
  d: path("M19 13v7");
}

.kakiz1beo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 20h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kp-jmwozp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 11v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ler50rfbf {
  d: path("M9 8v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.siun7_bal {
  d: path("M14 11v9");
}

.w72_tqbyo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 13v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y4mdv3b1r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 8v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="y4mdv3b1r"/><path class="kp-jmwozp"/><path class="w72_tqbyo"/><path class="kakiz1beo"/><path class="r3faxubne"/><path class="ler50rfbf"/><path class="siun7_bal"/><path class="cub64ac5a"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:retention-duotone-regular",
	});
}

export default Component;
