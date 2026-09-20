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
		"content": `<style>.diirydb6j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5.5 17a6.5 6.5 0 0 1 13 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.tcbtlrbob {
  d: path("M8 17a4 4 0 0 1 8 0");
}

.ttx6bbv4v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u0jypcc9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ur2t430wi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 17a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vvh_i7bfp {
  d: path("M5.5 17a6.5 6.5 0 0 1 13 0");
}
</style><g class="hntgybcog"><path class="u0jypcc9y"/><path class="diirydb6j"/><path class="ur2t430wi"/><path class="ttx6bbv4v"/><path class="srzgk7jml"/><path class="vvh_i7bfp"/><path class="tcbtlrbob"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:rainbow-duotone-thin",
	});
}

export default Component;
