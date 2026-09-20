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
		"content": `<style>.gt2efwopc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 8 3 -3 3 3 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ljevkdbdx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 20 3 -3 3 3 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lmj_kj__f {
  d: path("m3 8 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}

.ola702blo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 14 3 -3 3 3 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oy_r10b4z {
  d: path("m3 14 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yzilgtbzd {
  d: path("m3 20 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}
</style><g class="s0phu2bbs"><path class="gt2efwopc"/><path class="ola702blo"/><path class="ljevkdbdx"/><path class="lmj_kj__f"/><path class="oy_r10b4z"/><path class="yzilgtbzd"/></g>`,
		"fallback": "iconmind:ocean-duotone-bold",
	});
}

export default Component;
