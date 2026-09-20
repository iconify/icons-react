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
		"content": `<style>.elo_ccj2r {
  d: path("M9 4v7");
}

.m20u53bzo {
  fill: currentColor;
  d: path("M6 13a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tlah7acnn {
  d: path("M6 13a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.xpqmchyzd {
  d: path("M14.5 13v5");
}

.yz_nd208h {
  d: path("M15 4v7");
}

.zcoymgb5h {
  d: path("M9.5 13v5");
}
</style><g class="nrj6p8qat"><path class="m20u53bzo"/><path class="tlah7acnn"/><path class="elo_ccj2r"/><path class="yz_nd208h"/><path class="zcoymgb5h"/><path class="xpqmchyzd"/></g>`,
		"fallback": "iconmind:tool-parallel-duotone-regular",
	});
}

export default Component;
