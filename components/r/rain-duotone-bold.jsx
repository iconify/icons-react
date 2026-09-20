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
		"content": `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.cj5113wsg {
  d: path("M7 16.5 9.5 19a2.5 2.5 0 0 1 -5 0Z");
}

.esolkqbpc {
  fill: currentColor;
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h6_sbjwza {
  fill: currentColor;
  d: path("m12 17.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lgjd1ubza {
  fill: currentColor;
  d: path("m17 16.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rlzr00bpc {
  fill: currentColor;
  d: path("M7 16.5 9.5 19a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tuh74bcqx {
  d: path("m17 16.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.zk34t1b0y {
  d: path("m12 17.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}
</style><g class="s0phu2bbs"><path class="esolkqbpc"/><path class="rlzr00bpc"/><path class="h6_sbjwza"/><path class="lgjd1ubza"/><path class="c-pcdbceg"/><path class="cj5113wsg"/><path class="zk34t1b0y"/><path class="tuh74bcqx"/></g>`,
		"fallback": "iconmind:rain-duotone-bold",
	});
}

export default Component;
